const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// create express app
const app = express();
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, 'public')));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require Notes routes
require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
