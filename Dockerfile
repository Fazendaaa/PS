FROM node:14.21.3-alpine3.17 AS BASE

WORKDIR /usr/src

RUN [ "npm", "install", "--global", "@vue/cli" ]

COPY package.json .

RUN [ "npm", "install" ]

COPY .browserslistrc ./
COPY .stylelintrc ./
COPY ./data/ ./data/
COPY ./public/ ./public/
COPY *.js ./
COPY *.json ./
COPY ./src/ ./src/

EXPOSE 80



FROM node:14.21.3-alpine3.17 AS BUILD

WORKDIR /usr/src

ARG VUE_APP_WA_NUMBER=${VUE_APP_WA_NUMBER}

COPY --from=BASE /usr/src/ .

RUN [ "npm", "run", "build" ]



FROM node:14.21.3-alpine3.17 AS RUNNER
LABEL author="fazenda"
LABEL project="ps"

WORKDIR /usr/src

COPY --from=BUILD /usr/src/dist/ ./

RUN [ "npm", "install", "--global", "serve" ]

ENTRYPOINT [ "serve", "--single", "--listen", "80", "." ]

EXPOSE 80
