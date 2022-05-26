FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./ .
RUN npm install -g yarn 
RUN yarn install && yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

