FROM node:lts-alpine3.18



RUN mkdir /client
WORKDIR /client
COPY package.json .
COPY package-lock.json .  
RUN npm install
COPY . .

RUN npm install

EXPOSE 3000
CMD npm run dev