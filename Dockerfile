FROM node:12

#create app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . /app/

EXPOSE 3000

CMD ["node", "server.js"]
