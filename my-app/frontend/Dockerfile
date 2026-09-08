FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV VITE_BACKEND_URL=/api

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
