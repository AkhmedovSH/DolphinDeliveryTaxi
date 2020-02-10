var express = require("express"),
  http = require("http");
var app = express();
var server = http.createServer(app);
var io = require("socket.io").listen(server);
var port = process.env.PORT || 3000;

/* var connection = require('express-myconnection');
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
); */

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("connected");

  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
});

/* var objectData = { parent_id: 11, titleRus: "123", code: "123" };

io.of("/games").on("connection", socket => {
  socket.emit("welcome", objectData);
}); */

/* http.listen(port, function() {
  console.log("listening on *:" + port);
}); */

server.listen(3000, function() {
  console.log("listening on *:" + port);
});
