var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio');

var app = express();
var port = 3033;

///MIDDLEWARE// to allow access of the public folder to the browser
//never store passwords or other sensitive information here
app.use(express.static('public'));
//app.use(bodyParser());
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));
app.use(bodyParser.json());
app.use(cors());

//ENDPOINTS///
// app.get('/api/message', function(req, res) {
// 	return res.send({"message": "HELLO WORLD!!!!!!"});
// });

app.get('/api/message', function(req, res) {
	return res.json(message);
})

app.post('/api/send_text_message', function(req, res) {
	console.log(req.body.message);
	res.send();
})


app.listen(port, function(){
	console.log('Im watching you...', port);

});