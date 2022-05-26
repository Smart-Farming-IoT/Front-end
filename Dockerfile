FROM node:lts-alpine as build-stage
WORKDIR /app
RUN npm install
COPY package*.json ./
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

