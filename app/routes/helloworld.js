var express = require('express');
var app = express();
// expecting something like https://timestamp-ms.herokuapp.com/December%2015,%202015
//      or https://timestamp-ms.herokuapp.com/1450137600
app.get('/home/:data', function(req, res) { 
   res.end('Hello World');
});