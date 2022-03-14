FROM node:16-alpine AS build

WORKDIR /app

ENV NODE_ENV production
#ENV REACT_APP_PORTIS_ID
#ENV REACT_APP_SENTRY
#ENV REACT_APP_TREZOR_URL
#ENV REACT_APP_TREZOR_EMAIL
#ENV REACT_APP_FORTMATIC_KEY
ENV REACT_APP_API_URL https://api.defihelper.io/api
ENV REACT_APP_WAVES_NODE_URL https://nodes.wavesnodes.com
ENV REACT_APP_SID_LIFE_TIME 31536000
ENV REACT_APP_ADAPTERS_HOST https://adapters.defihelper.io
ENV REACT_APP_LAUNCH_APP_URL https://app.defihelper.io/api

RUN apk --update add git
COPY package*.json ./
RUN npm install -g husky cross-env
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /app
COPY deployments/dockerfiles/website/default.conf /etc/nginx/conf.d/default.conf
COPY deployments/dockerfiles/website/prerenderer.conf /etc/nginx/prerenderer.conf
COPY deployments/dockerfiles/website/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build .
EXPOSE 8080