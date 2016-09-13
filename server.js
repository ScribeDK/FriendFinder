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


// Table Reservations (DATA)
var friendList = [

]

// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/main.html'));
})

// Basic route that sends the user second to the AJAX Page
app.get('/add', function(req, res){

	res.sendFile(path.join(__dirname + '/survey.html'));
})

// Create survey
app.post('/api/newSurvey', function(req, res){
	
	console.log(req.body);
	
	var req.body.name = new friend{req.body.name,req.body.photo, req.body.scores};

		friendList.push(req.body.name)
		
		var friend = checkForFriends(friendList, req.body.name);
		
		res.json(friend);
})

//Returns all survey data 
app.post('/api/survey', function(req, res){
	
	
	
	res.json();
})

// Starts the server to begin listening
app.listen(PORT, function(){
	console.log('App listening on: http://localhost:' + PORT);
})

var checkForFriends = function(friendList, name){
	var friend = "none";
	var finalScore = 50;
	if (friendList.length > 1){
		for (e in friendList){
			if (name != friendList[e]){
				var total = 0;
					for (f in friendList[e].scores){
						if (name.scores[f] > friendList[e].scores[f]){
							total += (name.scores[f] - friendList[e].scores[f])
						}
						if (name.scores[f] < friendList[e].scores[f]){
							total += (friendList[e].scores[f] - name.scores[f])
						}
					}
				if (finalScore < total){
					finalScore = total;
					friend = friendList[e].name; 
				}
				
			}
		}
	}
	return friend;
}


