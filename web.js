var express = require('express');
    fs = require("fs");

 var buff = new Buffer(25);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html','utf-8',function (err,buff))  {
	if (err) throw err;
	response.send('error');
});
  
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

