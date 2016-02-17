'use strict';
var path = process.cwd();
module.exports = function (app) {

    app.get('/', function (req, res){ res.sendFile(path + '/public/reference.html'); });
    
	app.get('/:data', function(req, res) { 
            res.end(timeStamp(req.params.data) );
		});
};

function timeStamp(date) {

   // is it some date form that JS can read?
   var d = new Date(date);
   if (d.getFullYear()) return (JSONDates(d));
   
   // unix timestamp?
   d = new Date(date * 1000);
   if (d.getFullYear()) return(JSONDates(d));
   
   // else it is garbage
   return(JSON.stringify({'unix': null, 'natural': null}));
}

function JSONDates (d) {
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return JSON.stringify({"unix": d/1000, "natural": monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()});
}