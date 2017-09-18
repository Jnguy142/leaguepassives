var express = require('express'); //require express to use server
var bodyParser = require('body-parser'); //tool to extract data from requests
var router = require('./router/main.js'); //handle routing

var server = express(); //instantiate an instance of express

var logger = ((req, res, next) => {
    console.log(req.url);
    next();
});

server.use(logger);
server.use(bodyParser.json()); //middleware function to parse data
server.use('/api', router); //middleware for routing

server.listen(3000, () => {
    console.log('you are currently listening on port 3000')
}); //listen for server requests