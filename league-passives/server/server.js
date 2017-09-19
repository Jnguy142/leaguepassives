var express = require('express'); //require express to use server
var bodyParser = require('body-parser'); //tool to extract data from requests
var router = require('./router/main.js'); //handle routing
var db = require('./database/maindb.js');//database
var server = express(); //instantiate an instance of express
var path = require('path');

server.use(bodyParser.json()); //middleware function to parse data
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use('/api', router); //middleware for routing
server.use(express.static(path.resolve(__dirname, '../build')));

server.listen(3000, () => {
    console.log('you are currently listening on port 3000')
}); //listen for server requests