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
_docker run [Container_Name]_ - run in the foreground.
_docker run -d [Container_Name]_ - run in the background. It returns a hash.
If we want to attach again, we can do the following:
_docker attach [Container_NAME/Above_Hash]_
