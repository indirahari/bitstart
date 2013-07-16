
var express = require('express');
    fs = require("fs");


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  fs.readFile('index.html',function (err,data)  {
//	if (err) throw err;
//	console.logesponse.send(data);
//});
  response.send(fs.readFileSync("./index.html".toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
`

