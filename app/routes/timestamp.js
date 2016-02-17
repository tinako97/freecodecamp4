var express = require('express');
var app = express();
// expecting something like https://timestamp-ms.herokuapp.com/December%2015,%202015
//      or https://timestamp-ms.herokuapp.com/1450137600
app.get('/home/:date', function(req, res) { // when a GET is sent to /home by client, set the text after /home/ to key date...
   var date = req.params.date;  // here's the ID we grabbed above
   
   // is it empty? - return instructions
   if (!date) res.end('Instructions');
   
   // is it some date form that JS can read?
   var d = new Date(date);
   if (d.getFullYear()) returnJSONDates(d);
   
   // unix timestamp?
   d = new Date(date * 1000);
   if (d.getFullYear()) returnJSONDates(d*1000);
   
   // else it is garbage - return null
   res.end(null);
});
app.listen();  // port?

function returnJSONDates (d) {
    
}