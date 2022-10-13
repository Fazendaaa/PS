FROM node:lts-alpine3.15 AS BASE

WORKDIR /usr/src

RUN [ "npm", "install", "--global", "@vue/cli" ]

COPY package.json .

RUN [ "npm", "install" ]

COPY .browserslistrc .
COPY .stylelintrc .
COPY ./public ./public/
COPY *.js .
COPY *.json .
COPY ./src/ ./src/

EXPOSE 80



FROM node:lts-alpine3.15 AS BUILD

WORKDIR /usr/src
COPY --from=BASE /usr/src/ .

RUN [ "npm", "run", "build" ]



FROM node:lts-alpine3.15 AS RUNNER
LABEL author="fazenda"
LABEL project="ps"

WORKDIR /usr/src

COPY --from=BUILD /usr/src/dist/ .

RUN [ "npm", "install", "--global", "serve" ]

ENTRYPOINT [ "serve", "--single", "--listen", "80", "." ]
