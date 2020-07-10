var express = require('express');

var app = express();

// app listen on port 4007
app.listen(4007);

// server entry point
app.get('/', function(req, res) {
  res.send("This is our containerized Node.js application!");
});
