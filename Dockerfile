FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./build ./build

CMD [ "npm", "run", "start" ]