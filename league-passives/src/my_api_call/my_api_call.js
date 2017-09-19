var url = 'http://localhost:3000/';
var path = 'api/quiz';
var axios = require('axios');

var my_api_call = function (app) {
    axios.get(url + path)
    .then((data) => {
        var prependUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/';
        var champ = data.data.name;
        var passivePng = data.data.passive.image.full;
        app.setState({
            passiveUrl: prependUrl + passivePng,
            champ: champ,
        })

    })
    .catch((err) => {
        console.log('there was an error to the api call')
    })
}

export default my_api_call;