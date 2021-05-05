# NodeJsRestAPI
NodeJS Express MongoDB REST API Project.

### Geting started
This basic project is very useful to building a RESTful (CRUD) web APIs

This project will run on NodeJs using MongoDB as database. Project is open for suggestions, Bug reports and pull requests.


###  Requirements
* NodeJS
* MongoDB

### Optional
*Docker

###  How to install
#### Using GitHub
Copu link from the repository and clone it to your local folder
`# git clone https://github.com/lukasz-kuch/NodeJsRestAPI.git`
### How to run
If youhave already running MongoDB (listening on port 27107), just run the app in console with ```npm start```

You ca use also Docker to contenerize your app. Use `docker-compose up` which will create containerap with two services: node-app, mongo
Remember to change loalhost to mongo container name for connection definition in  `.\config\database.config.js`
```javascript
module.exports = {

url:  'mongodb://mongo:27017/notes'

}
```
Why?
When using linked docker containers you should use the name of the container instead of `localhost`. The reason for changing it to `mongo` is because it uses the links attribute to mongo in  `docker-compose.yml`. That would result to a hostname of mongo in your  `/etc/hosts`  of the web docker container.

### Testing
You can use POSTMAN or INSOMNIA to proceed with CRUD REAST API's
Examples:
* POST - `http://localhost:3000/notes`
body:
```json
{
	"title": "Some title",
	"content": "Some content"
}
```
* GET - `http://localhost:3000/notes`
*  DELETE - `http://localhost:3000/notes/<note_id>`
