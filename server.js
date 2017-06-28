var express = require('express');

var app = express.createServer();

app.use(express.staticProvider(__dirname + '/public'));

app.get('/', function(req, res) {
 res.render('index.html');
});


//spin up server
app.listen(9001, '127.0.0.1');
