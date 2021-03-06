var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var rbuf = fs.readFileSync("index.html");
var jstr = rbuf.toString() 

app.get('/', function(request, response) {
  response.send(jstr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
