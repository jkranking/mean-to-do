var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController'); // returns a function that sets up the seed data input for the express app
var apiController = require('./controllers/apiController');


var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// building out api endpoints

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);

// nodemon app.js to start server
