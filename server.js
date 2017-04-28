'use strict';
const express = require('express');
const http = require('http');
const app = express();

app.set('views', __dirname + '/assets');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/assets'));

app.use(function(req, res) {
  res.render('index.html');
});
app.listen('3200', function() {
  console.log('Server running on port 3200');
});
