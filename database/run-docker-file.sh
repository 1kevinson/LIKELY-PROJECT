#!/bin/bash

# This file is use for the development env

image_name="likely-database-dev"

echo '--- 👨🏽‍💻 build developement image ---'
if docker build --tag $image_name .
then
  echo '--- 👨🏽‍💻 run backend container for dev environnement ---'
  docker run \
    --publish 27017:27017 \
    --name $image_name \
    --env-file ../env/mongo.env \
    --detach $image_name
else
   echo "Build of image failed"
fi

