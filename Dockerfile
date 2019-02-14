FROM node:alpine

EXPOSE 1111

WORKDIR /usr/local/app
COPY app ./

RUN npm install

CMD npm start
