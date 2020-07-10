```sh
# build the image
docker build -t mybuildimage .

# Check all images and get the image id
docker images

# Run the container
docker run -p 4004:4007 mybuildimage

# Browse 
localhost:4004
```