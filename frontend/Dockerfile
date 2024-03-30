# Stage 1: Build the application
FROM node:16-alpine as builder
ARG REACT_APP_BACKEND_ENDPOINT
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run the application
FROM nginx:stable-alpine as executor
ARG REACT_APP_BACKEND_ENDPOINT

WORKDIR /app

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]