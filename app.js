var express = require('express');
var app = new express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection',function(client){
  client.on('join',function(username){
    client.username = username;
  });
  client.on('messages',function(message){
    var username = client.username;
    client.broadcast.emit('messages', username + ": " + message);
    client.emit('messages', username + ": " + message);
  });
});

app.get('/', function(req,res){
  res.sendFile( __dirname + '/index.html');
});

server.listen(8080);  