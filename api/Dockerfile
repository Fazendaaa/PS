FROM node:14.21.3-alpine3.17 AS BASE

WORKDIR /usr/src

COPY package.json .

RUN [ "npm", "install" ]

COPY *.json ./
COPY ./src/ ./src/

RUN [ "npm", "run", "build" ]

ENTRYPOINT [ "npm", "run", "start" ]

EXPOSE 80
