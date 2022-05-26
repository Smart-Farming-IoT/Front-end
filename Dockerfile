FROM alpine:3.14 as build-stage
#ENV NODE_VERSION 16.15.0
WORKDIR /app
COPY package*.json ./
RUN npm install -g yarn
RUN yarn install
COPY ./ .
RUN yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

