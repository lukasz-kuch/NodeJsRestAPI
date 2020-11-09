FROM node:14-slim

#create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY ./package*.json ./

RUN npm install

#Bundle app source
COPY . .

USER node

EXPOSE 3000

CMD ["npm", "start"]
