FROM node:16.15.0-alpine3.15 as build-stage
#ENV NODE_VERSION 16.15.0
WORKDIR /app
COPY package*.json ./
RUN npm install
# ARG VUE_APP_FIREBASE_API_KEY
ENV VUE_APP_FIREBASE_API_KEY ${{secrets.VUE_APP_FIREBASE_API_KEY}}
COPY . .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
