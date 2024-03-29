FROM node:10.16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY ./src/ .

EXPOSE 8080
CMD ["npm", "start"]