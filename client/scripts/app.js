var app = {
  server: "http://parse.sfm8.hackreactor.com/chatterbox/classes/message",
  // room: 'lobby',

	init: function() {
    app.fetch()
    // Fetch messages from the default server
    // Iterate through message objects
      // Render messages

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
    app.init()
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
    url: this.server,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
        console.log(app.server)
        data = data.results;
        for (var key in data) {
        app.renderMessage(data[key])
       }
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
    let $paragraph = ('<p class="username">' + message.username + message.text + '</p>');
    $('#chats').prepend($paragraph);


  },

  renderRoom: function(room) {
    let $room = ('<option value=' + room + '>' + room + '</option>');
    $('#roomSelect').append($room);
    app.server = "http://parse.sfm8.hackreactor.com/chatterbox/classes/" + room
    // create a new room
  },

  handleUsernameClick: function() {
    console.log("CLICKED")
  },

  handleSubmit: function(username, text, room) {
    var obj = {"username": username,
    "text": text,
    "roomname": room
  }
    // Wrap text in a message
    // Send to the server
    this.send(obj)
    // Init
  }
}

$(document).ready(function() {

  // Click on a username to add a friend; friends should be bolded in messages
  $('#chats').on('click', '.username', function(event) {
    app.handleUsernameClick();
    // Create a new room with renderRoom
    // Switch to renderRoom
    // Fetch to get messages from the room
  });

  // Send messages to the server
  $('#send').on('click', '.submit', function(event) {
    event.preventDefault();
    //app.handleSubmit();
    var text = ($( "input:first" ).val());
    var username = window.location.search.split('=').slice(-1).toString()
    var currentRoom = $('#roomSelect option:selected').text()
    app.handleSubmit(username, text, currentRoom)
    // need to get the room


  });

  // Create a new room when new room dropdown is selected
    // Listen for when a user selects to make a new room
    // Get name of room from user
    // renderRoom, which adds to list of rooms
    // Go to the room (optional)

  // Switch rooms and fetch messages for the room
  $("#roomSelect").change(function() {
    var currentRoom = ($('#roomSelect option:selected').text())
    app.server = "http://parse.sfm8.hackreactor.com/chatterbox/classes/" + $('#roomSelect option:selected').text()
    console.log(app.server)
    app.init()

  })
    // Need to init on the room
    // Set the room somehow
});

app.init()
// send messages and fetch as soon as it's sent
// Add click handler on submit
  // Grab the text in the input box and set to message
  // send message and fetch from the current room you're in

// fetch and render