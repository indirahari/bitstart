
s = require('express');
    fs = require("fs");


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html','utf-8',function (err,data)  {
	if (err) throw err;
	response.send(data);
});
  response.send('data by indira');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
`

