function insertMessage(data){
  var message = $('<li class="message">');
  $(message).text(data);
  $('.messages').append(message);
};
