

/*
var socket = io.connect("localhost:1337");

socket.on('connect', function() {
  console.log("Established socket connection");

    io.socket.on('gpslocation', function (event) {
      console.log("pubnub" + event);
    });

    io.socket.get('/gpslocation', {}, function(locations) {
        console.log("found" + locations.length + "locations");
    });

    socket.on('message', function() {
      console.log("Socket msg: " + message);
    });

    socket.on('gpslocation/create', function(gpslocation){
        io.emit('gpslocation', gpslocation);
    });

    socket.on('gpslocationActive', function(gpslocationActive){
      io.emit('gpslocationActive', gpslocationActive);
    });


});
*/
