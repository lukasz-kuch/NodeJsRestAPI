# NodeJsRestAPI

NodeJS Express MongoDB REST API Project.

## Getting started

This basic project is very useful to building a RESTful (CRUD) web APIs

This project will run on NodeJs using MongoDB as database. Project is open for suggestions, Bug reports and pull requests.

## Requirements

* NodeJS
* MongoDB

## Optional

* Docker

## How to install

### Using GitHub

Copy link from the repository and clone it to your local folder
`# git clone https://github.com/lukasz-kuch/NodeJsRestAPI.git`

## How to run

If you have already running MongoDB (listening on port 27107), just run the app in console with ```npm start```

You ca use also Docker to containerize your app. Use `docker-compose up` which will create app-service with two containers: node-app, mongo.
Remember to change localhost to mongo container name for connection definition in  `.\config\database.config.js`

```javascript
module.exports = {

url:  'mongodb://mongo:27017/users'

}
```

Why?
When using linked docker containers you should use the name of the container instead of `localhost`. The reason for changing it to `mongo` is because it uses the links attribute to mongo in  `docker-compose.yml`. That would result to a hostname of mongo in your  `/etc/hosts`  of the web docker container.

## Testing

You can use POSTMAN or INSOMNIA to proceed with CRUD REST API
Examples:

* POST - `http://localhost:3000/users`

```json
body:
{
 "name": "Some name",
 "email": "Some email"
}
```

* GET - `http://localhost:3000/users`
* DELETE - `http://localhost:3000/users/<userId>`
