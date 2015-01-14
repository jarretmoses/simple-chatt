$(function(){
  var socket = io.connect('http://localhost:8080');
  socket.on('messages', function(data){ insertMessage(data) });
  socket.on('connect',function(data){
    username = prompt('Please enter your alias for the chat');
    socket.emit('join',username);
  });

  $('#chat_form').submit(function(e){
    e.preventDefault();
    var $input = $('#chat_input')
    var message = $input.val();
    socket.emit('messages',message);
    $input.val('');
  });
});