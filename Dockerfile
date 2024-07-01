# Stage 1: Build the Angular project
FROM node:18.14.0 As builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the application with Nginx
FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/woped-frontend/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
