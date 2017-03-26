var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

var path = require('path');


// Load css js files
app.use("/bower_components",express.static("bower_components"));

app.get('/', function(req, res){
	res.sendfile('index.html');
});


var totalUsers = 0;

//Whenever someone connects this gets executed
io.on('connection', function(socket){
	totalUsers++;


 	// Whenever someone disconnects this piece of code executed
	socket.on('disconnect', function () {
		totalUsers--;
	});
});


http.listen(3000, function(){
	console.log('listening on *:3000');
});
