// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friend = require('./data/friends.js');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routes
require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function(){
	console.log('App listening on: http://localhost:' + PORT);
})


