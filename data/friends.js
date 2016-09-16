var friendsData = function(){
	this.names = [];
	this.photoAddress = [];
	this.scores = [];
	this.addFriend = function(name, address, scores){
		this.names.push(name);
		this.photoAddress.push(address);
		this.scores.push(scores);
	}
}

module.exports = friendsData;