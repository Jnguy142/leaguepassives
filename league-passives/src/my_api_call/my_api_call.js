var url = 'http://localhost:3000/';
var path = 'api/passivequiz'

var my_api_call = function () {
    axios.get(url + path)
    .then((data) => {
        console.log('you were able to get the data');
    })
    .catch((err) => {
        console.log('there was an error to the api call')
    })
}