var axios = require('axios');
var url = 'http://localhost:3000/';
var path = 'api/quiz';
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
    user_api_call : function (app, user, url, method) {
        axios({
            method: method, 
            url: url, 
            data:{
                username: user.username,
                score: user.score + 1
            }
        })
        .then((data) => {
            app.setState({username: data.data.username, score: data.data.score});
        })
        .catch((err) => {
            console.log('there was an error trying make that api call from the client');
        })
    },
    allusers_api_call : (app, user, url, method) => {

    },
}

export default my_api_calls;