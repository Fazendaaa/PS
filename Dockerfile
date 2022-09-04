FROM node:18-alpine3.15 AS BASE

WORKDIR /usr/src

RUN apk add --no-cache python3 make g++

COPY package.json .

RUN [ "npm", "install" ]

COPY public public
COPY *.json .
COPY *.ts .
COPY index.html .
COPY src src

EXPOSE 80

FROM node:18-alpine3.15 AS BUILD

WORKDIR /usr/src
COPY --from=BASE /usr/src/ .

RUN [ "npm", "run", "build" ]

FROM node:18-alpine3.15 AS RUNNER
LABEL author="fazenda"
LABEL project="ps"

WORKDIR /usr/src
COPY --from=BUILD /usr/src/dist/ .

RUN [ "npm", "install", "--global", "http-server" ]

EXPOSE 80

ENTRYPOINT [ "http-server", "--port", "80", "--address", "0.0.0.0", "." ]
