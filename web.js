var express = require('express');
    fs = require("fs");

 var buff = new Buffer(25);




var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html','utf-8',function (err,buff))  {
	if (err) throw err;
	response.send('error');
});

buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
response.send(len + "hello indira " + buf.toString('utf8', 0, len));







  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

