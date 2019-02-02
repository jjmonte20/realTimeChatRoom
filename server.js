// welcome to the boiler plate js file for making a full stack website
// this will cause a lot less friction when connecting a page to the web
// since all of the info is on the page
var express = require("express");
var socket = require('socket.io');

var app = express();

var PORT = process.env.PORT || 8080;



// always put on the bottom of the page, listen page will always be active in a given web app
var server = app.listen(PORT, function() {
    console.log(PORT + " is listening")
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});