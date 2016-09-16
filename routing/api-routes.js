// LOAD DATA
var friends = require('../data/friends.js');

// ROUTING
module.exports = function(app){
	
	// Inputed friends (DATA)
	var friendList = 2;
	var friendsData = new friends();
	
	friendsData.addFriend("Bob Bore","https://upload.wikimedia.org/wikipedia/en/a/a3/Bobdobbs.png",[1,1,1,1,1,1,1,1,1,1]);
	friendsData.addFriend("Jane Avrage","http://1.bp.blogspot.com/-UuB6FariAYU/TvGwYY_Eu7I/AAAAAAAAOVs/HXN7lJMaT2o/s1600/hair-Jane-Fonda.jpg",[3,3,3,3,3,3,3,3,3,3]);
	friendsData.addFriend("Jack Prat","https://tse3.mm.bing.net/th?id=OIP.Ma4a2edb7f0f136eac370f9eac2c86b2fH1&pid=15.1",[5,5,5,5,5,5,5,5,5,5]);
	
	// API GET Requests
	app.get('/api/friends', function(req, res){
		res.json(friendsData.names + " : " + friendsData.photoAddress + " : " + friendsData.scores);
	});
	
	// Create survey
	app.post('/api/newSurvey', function(req, res){
	
	console.log(req.body);
	
	friendsData.addFriend(req.body.name, req.body.photo, req.body.scores);

		friendList += 1; 
		
	var friendSelect = "none";
	var friendPhoto = "";
	var finalScore = 50;
	var lists = friendsData.scores;
	var mainList = lists[friendList];
	var total = 0;
		for (e in lists){
			console.log("List:" + e);
			if (friendList != e){
				var checkList = lists[e];
				for(i in checkList){
				total += Math.abs(checkList[i] - mainList[i])
				console.log(total +"/" + checkList[i] + "-" + mainList[i]);
				}
				if (finalScore > total){
					console.log(finalScore);
					finalScore = total;
					console.log(finalScore);
					friendSelect = friendsData.names[e];
					console.log(friendSelect + "/" + friendsData.names[e]);					
					friendPhoto = friendsData.photoAddress[e];
				}
					total = 0;
				}
			}
		
	var data = {
	    	name: friendSelect,
	    	photo: friendPhoto
	    }
		
		res.json(data);
	});

	//Returns all survey data 
	app.post('/api/survey', function(req, res){
	
	
	res.json();
	})
	
}