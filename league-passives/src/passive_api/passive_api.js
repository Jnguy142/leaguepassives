var axios = require('axios');
var LEAGUE_API_KEY = 'api_key=RGAPI-3259779c-f2bd-454b-9215-020317c9d60d'
var url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions';
var tags = '?locale=en_US&tags=passive&dataById=true&';
var makePassiveApiCall = () => {
    axios({
        url: url + tags + LEAGUE_API_KEY,
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-Type": "text/plain",
            "X-Riot-Token": "RGAPI-3259779c-f2bd-454b-9215-020317c9d60d",
            "Accept-Language": "en-US,en;q=0.8",
        
           },
    })
    .then((data) => { 
        console.log('i was able to get the data boss')
    })
    .catch((err) => { 
        console.log(err);
        console.log('sorry i was not able to get the info');
    });
};

export default makePassiveApiCall;