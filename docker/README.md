# Docker


Sample `Dockerfile`:

```sh
# Layer 1 - Base Layer
FROM python:2.7

# Layer 2
RUN mkdir -p /app

# Layer 3
WORKDIR /app

# Layer 4
COPY ./requirements.txt /app/

# Layer 5
RUN pip install -r requirements.txt

# Layer 6
CMD ["python", "main.py"]
```

`FROM` - define which base image we want to start building our custom image from. If we want to start from scratch, we can use the following:
```sh
FROM scratch
```

`RUN` - is any valid Linux command. Suppose we have _Ubuntu_ as our base image, then we can run the following command to install the __wget__ package into the running container using __apt-get__ package manager (_Ubuntu_ uses __apt-get__ as a package manager)
```sh
RUN apt-get update && apt-get install -y wget
```

```sh
# To create a /app folder and go to this directory
RUN mkdir -p /app && cd /app
```

`COPY` - to copy files and folders from the host into the image that we're building
`ADD` - simmilar to _COPY_. it lets us copy and unpack _TAR_ files as well as provide a _URL_ as a source.

```sh
# copy all file and folders from the current directory recursively to the /app folder inside the image
COPY . /app

# copy everything from the client folder to the /app/client folder
COPY ./client /app/client

# copy the file into the target folder and renames it to sample-test.txt
COPY test.txt /app/sample-test.txt

# wildcards are also allowed. Copy all files starting with _test_ to the _app_ folder
COPY ./test* /app/

# unpack the _sample.tar_ file into the target folder, /app/bin
ADD sample.tar /app/bin

# copy the remote file into the target file
ADD http://example.com/sample.txt /app/data/
```

`WORKDIR` - defines the working directory or context that is used for the image.

```sh
WORKDIR /app/client
```

All activities will happen in this directory after executing the above line.

*NOTE*
```sh
RUN cd /app/client
RUN touch sample.txt
```

and 

```sh
WORKDIR /app/client
RUN touch sample.txt
```

- both are not same. First example will create a _sample.txt_ in the root directory of the image file system whereas the second one will create the file at the expected location(/app/client folder). This is because, only _WORKDIR_ works across the layers of the image but _cd_ commnad alone is not persisted acroll layers.


`CMD` and `ENTRYPOINT` keywords are used to tell Docker what the start process and how to start that process. There is one subtle difference between _CMD_ and _ENTRYPOINT_.

`ENTRYPOINT` - is used to define the command of the expression
`CMD` - is used to define the parameters for the command

Let's say about the following statement:
```sh
ping 8.8.8.8 -c 5
```

Here, _ping_ is the command and _8.8.8.8 -c 5_ are the parameters to this command. Hence, we can write the Dockerfile as like below:

```sh
FROM alpine:latest
EXTRYPOINT ["ping"]
CMD ["8.8.8.8", "-c", "5"]
```

_ENTRYPOINT_ and _CMD_ values are formatted as a JSON array of strings. This is called __exec__ form. However, we can use the __shell__ form also, like below:
```sh
FROM alpine:latest

# CMD command param1 param2 ...
CMD ping 8.8.8.8 -c 5
```

We can build an image from the Dockerfile, as follows:
```sh
docker image build -t pingtest .
```

Then run  a container from our created _pingtest_ image:
```sh
docker container run -rm -it pingtest
```


Let's see a realistic example of Dockerfile.

```sh
# Build an image for a Node.js application; base image node:9.4
FROM node:9.4
# Create a /app folder in the filesystem of the image
RUN mkdir -p /app
# Set the working directory or context to the created /app folder
WORKDIR /app
# Copy a package.json file into the /app folder inside the image
COPY package.json /app/
# Install npm dependencies; since we're in the context and package.json is in the same directory
RUN npm install
# Copy all files from the current folder of the host into the /app folder of the image
COPY . /app
# Below two lines: Run the `npm start` command to start the Node application
ENTRYPOINT ["npm"]
CMD ["start"]
```
