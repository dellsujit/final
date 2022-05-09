FROM node:10.16.1-alpine AS builder
WORKDIR /FullStack
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder dist/Favyoutube2/  /usr/share/nginx/html