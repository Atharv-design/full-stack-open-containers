FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Run tests during build process (Exercise 14)
RUN npm test

# Set backend URL for Vite build (Exercise 13 & 20)
ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
