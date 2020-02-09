var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var connection = require('express-myconnection');
var mysql = require('mysql');

app.use(
  connection(
    mysql,
    {
      host: 'localhost',
      user: 'admin',
      password: '998132213',
      port: 3306, //port mysql
      database: 'sampledb'
    },
    'pool'
  ) //or single
);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

/* io.on('connection', function(socket) {
  console.log('connected');
  
  socket.emit('welcome', 'Hello from Me');
}); */

var objectData = { parent_id: 11, titleRus: '123', code: '123' };

io.of('/games').on('connection', socket => {
  socket.emit('welcome', objectData);

  socket.on("")
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});
