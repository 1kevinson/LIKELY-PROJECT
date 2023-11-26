#!/bin/bash

image_name="likely-frontend-dev"

echo '--- 👨🏽‍💻 build developement image ---'
if docker build --tag $image_name .
then
  echo '--- 👨🏽‍💻 run backend container for dev environnement ---'
  docker run \
    --mount type=bind,src=./src,dst=/usr/share/nginx/html/src \
    --publish 8081:80 \
    --name $image_name \
    --detach $image_name
else
   echo "Build of image failed"
fi
