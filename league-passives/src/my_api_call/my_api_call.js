var url = 'http://localhost:3000/';
var path = 'api/quiz';
var axios = require('axios');

var my_api_call = function () {
    axios.get(url + path)
    .then((data) => {
        console.log('you were able to get the data');
        console.log(data);
    })
    .catch((err) => {
        console.log('there was an error to the api call')
    })
}

export default my_api_call;