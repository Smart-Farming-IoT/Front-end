FROM node:lts-alpine as build-stage
WORKDIR /app
RUN yarn install -g @vue/cli@latest
COPY package*.json ./
COPY ./ .
RUN yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

