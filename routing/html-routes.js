// DEPENDENCIES
var path = require('path');

// ROUTING

module.exports = function(app){

	// HTML GET Requests
	app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/../public/main.html'));
})

// Basic route that sends the user second to the AJAX Page
app.get('/survey', function(req, res){

	res.sendFile(path.join(__dirname + '/../public/survey.html'));
})

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/main.html'));
	});

}