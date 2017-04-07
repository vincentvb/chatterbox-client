var app = {
  server: "http://parse.sfm8.hackreactor.com/chatterbox/classes/messages",

	init: function() {

	},

	send: function(message) {
		$.ajax({
		// This is the url you should use to communicate with the parse API server.
		url: this.server,
		type: 'POST',
		data: JSON.stringify(message),
		contentType: 'application/json',
		success: function (data) {
		console.log('chatterbox: Message sent');
		},
		error: function (data) {
		// See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		console.error('chatterbox: Failed to send message', data);
		}
		});
	},

  fetch: function() {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
    console.log('chatterbox: Message sent');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
    }
    });
  },

  clearMessages: function() {
    $('#chats').empty();
  },

  renderMessage: function(message) {
    // Get the #chats element
    // Create a new element and prepend to #chats
    let $paragraph = ('<p>' + message.text + '</p>');
    $('#chats').prepend($paragraph);


  },

  renderRoom: function(room) {
    let $room = ('<option value=' + room + '>' + room + '</option>');
    $('#roomSelect').append($room);
  }
}

