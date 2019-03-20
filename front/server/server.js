const express = require('express');
const http = require('http');
var app = express();
app.use("/static", express.static('../public'))
app.use('/', function (req, res) {
  console.log("ssss");
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});