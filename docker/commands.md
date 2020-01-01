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