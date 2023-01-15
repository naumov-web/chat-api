FROM node:18.12-buster

RUN npm i -g @nestjs/cli
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

CMD npm run start:dev