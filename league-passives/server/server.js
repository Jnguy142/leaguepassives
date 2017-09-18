var express = require('express'); //require express to use server

var server = express(); //instantiate an instance of express

server.listen(3000, () => {
    console.log('you are currently listening on port 3000')
}); //listen for server requests