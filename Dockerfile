FROM node:14-slim

#create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json /usr/src/app

RUN npm install

#Bundle app source
COPY . /usr/src/app

USER node

EXPOSE 3000

CMD ["npm", "start"]
