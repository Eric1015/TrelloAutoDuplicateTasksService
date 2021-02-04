<!--
title: 'Serverless Nodejs Rest API with TypeScript And MongoDB Atlas'
description: 'This is simple REST API example for AWS Lambda By Serverless framwork with TypeScript and MongoDB Atlas.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/Q-Angelo'
authorName: 'May Jun'
authorAvatar: 'https://avatars0.githubusercontent.com/u/17956058?s=460&u=f3acebabd097e6e93d5be5a8366b980fea5b15aa&v=4'
-->

# Trello weekend tasks auto duplicate tasks service

***Problem***

I need to create trello cards for each task in my "weekend tasks" list, but it is time-consuming and cumbersome to do.

***Solution***

With this Lambda service, it will automatically duplicates the cards in "weekend tasks" and put them in my "todo" list, so I don't need to create it manually.


## Setup and Deploy

Duplicate ```.env.example``` to ```.env.dev```, ```.env.pro```, ```.env.stg``` each in the ```config``` folder and fill in with your Trello credentials

install packages
```
npm install
```

local testing
```
sls invoke local --function <handler-name>
```

deploy to lambda
```
sls deploy
```
