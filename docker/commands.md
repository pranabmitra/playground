## Docker Commands

__Run__ - start a container.
Example: _docker run nginx_

__ps__ - list containers
Example: _docker ps_

__ps -a__ - get all running and previously stopped or exited contianers
Example: _docker ps -a_

__STOP__ - stop a container
Example: _docker stop [Container_Name]_

__Rm__ - remove a container
Example: _docker rm [Container_Name]_

__images__ - list images
Example: _docker images_

__rmi__ - remove images
Example: _docker rmi nginx_
Note: Need to delete all dependent containers to remove the image

__pull__ - download an image
Example: _docker pull nginx_
Note: It will download the image and store it on our host but will  not run the container

__Exec__ - excute a command
Example: _docker exec [Container_Name] cat /etc/hosts_

__Run__ - attach and detach
_docker run [image_Name]_ - run in the foreground.
_docker run -d [image_Name]_ - run in the background. It returns a hash.
If we want to attach again, we can do the following:
_docker attach [image_Name/Above_Hash]_

__Run__ - Run tag
Example: _docker run redis:4.0
Note: It pulls an image of 4.0 version of redis and run that. If we don't put any tag then it pulls the latest version of the images (default tag:latest)

__Run__ - STDIN
_docker run -it [image_Name]_ - attach to the terminal as well as in an interactive mode on the container.

__Run__ - PORT mapping
_docker run -p  80:5000 [image_Name]_ - container port is 5000 which is exposing on 80 port of the docker host so that we can access the application using 80 port from outside.

We can create multiple instances of the application and map them to different  ports of the docker host.
Example: 
_docker run -p  8000:5000 [image_Name]_ - 
_docker run -p  8001:5000 [image_Name]_ - 

__Run__ - Volume mapping
_docker run -v /opt/datadir:/var/lib/mysql mysql_ - to persist data. This will store all data in the external volume `/opt/datadir` directory in the docker host and will remain even we delete the docker container. 

__Inspect__ - Inspect container
Example: _docker inspect [Container_name]_ - to know more details of the container.

__Logs__ - Container Logs
Example: _docker logs [Container_name]_

__ENV__ - Environment variable
Example: _docker run -e APP_COLOR=blue [image_name]_ - this will set the app color (`blue`) to the environment variable.
Note: To see all env vars of  a container, we need to inspect the container and check _Config->Env_

__Network__ - 3 types of docker networks: bridge, none and host.
* bridge - It is default network of a container. We can use different ports for the container application.
* none - no particualr network assigned to the application. It doesn't have any access to any external networks or other contianers. They run in an isolated network.
* host - container and docker host's port are same. Hence, it is not possible to use multiple instances of the application.

Inspect particular network to get ip/subnet: _docker inspect [Container_name]_ - then go to `Netwoks` section.

To create a custom network:
_docker network create --driver bridge --subnet 182.18.0.0./16 custom-isolated-network_

__Storage__ - `/var/lib/docker` directory of the docker host.
There are two types of mounts:
* Volume mounting (mounts from the `/var/lib/docker/volumes` directory) - _docker run -v data_volume:/var/lib/mysql mysql_
Note: Docker will create the folder automatically, if we want we can create it also:
_docker volume create data_volume_
* Bind mounting (mounts a directory from any location on the docker host) - _docker run -v /data/mysql:/var/lib/mysql mysql_

New verbose way to mouting:
_docker run --mount type=bind,source=/data/mysql,target=/var/lib/mysql mysql_

