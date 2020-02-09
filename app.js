const io = require('socket.io-client');
//First Connect to the Server on the Specific URL (HOST:PORT)
let games = io('http://localhost:3000/games');
//Now Listen for Events (welcome event).
games.on('welcome', msg => {
  /*For the listener we specify the event name and we give the callback to which be called one the 
   event is emitted*/
  //Log the Welcome message
  console.log('Message: ', msg);
});
