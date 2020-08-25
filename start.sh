# Removes existing container, uses force in order to avoid stopping container
docker rm -f /kabalance-landing
# Builds new image
docker build -t kabalance-landing-image .
# Cleans old images
docker image prune -f
# Runs container from image
docker run --name kabalance-landing -p 8085:80 -d kabalance-landing-image