const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// parse requests of content-type - application/json
app.use(express.json());

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
// set default view engine
app.set('views', './public/views');
app.set('view engine', 'ejs');
// Require Users routes
require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
