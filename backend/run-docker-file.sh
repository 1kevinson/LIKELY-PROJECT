#!/bin/bash

# This file is use for the development env

image_name="likely-backend-dev"

echo '--- 👨🏽‍💻 build developement image ---'
if docker build --tag $image_name .
then
  echo '--- 👨🏽‍💻 run backend container for dev environnement ---'
  docker run \
    --mount type=bind,src=./,dst=/app/ \
    --publish 3000:3000 \
    --env-file .env \
    --name $image_name \
    --detach $image_name
else
   echo "Build of image failed"
fi

