# Server Dockerfile
FROM node:lts-alpine3.18

RUN adduser -D nikita


RUN mkdir /server
WORKDIR /server

COPY package.json .
COPY package-lock.json .  
RUN npm install

COPY . .
RUN npm install -g nodemon
RUN npm install  express
RUN chown -R nikita:nikita /server
USER nikita

EXPOSE 4000
CMD npm start
