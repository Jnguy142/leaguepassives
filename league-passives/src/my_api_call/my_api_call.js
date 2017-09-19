var url = 'http://localhost:3000/';
var path = 'api/quiz';
var path2 = 'api/users/create';
var axios = require('axios');

var my_api_calls = {
    passive_api_call : function (app) {
        axios.get(url + path)
        .then((data) => {
            var prependUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/passive/';
            var champ = data.data.name.toLowerCase();
            var passivePng = data.data.passive.image.full;
            app.setState({
                passiveUrl: prependUrl + passivePng,
                champ: champ,
            })

        })
        .catch((err) => {
            console.log('there was an error to the api call')
        })
    },
    user_api_call : function (app) {
        axios.post(url + path2)
        .then((data) => {
            console.log('here is the user', data.data);
        })
        .catch((err) => {
            console.log('there was an error trying to find that user');
        })
    }
}

export default my_api_calls;