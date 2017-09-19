var axios = require('axios');
var fs = require('fs');
var path = require('path');
var LEAGUE_API_KEY = 'api_key=RGAPI-3259779c-f2bd-454b-9215-020317c9d60d'
var url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions';
var tags = '?locale=en_US&tags=passive&dataById=true&';

var league_api_call = (req, res) => {
    axios({
        url: url + tags + LEAGUE_API_KEY,
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "X-Riot-Token": "RGAPI-3259779c-f2bd-454b-9215-020317c9d60d",
            "Accept-Language": "en-US,en;q=0.8",
        
           },
    })
    .then((data) => { 
        fs.writeFile(path.resolve(__dirname,'./local_champ_file.txt'), JSON.stringify(data.data.data), (err) => {
            if(err) {
                console.log('there was an error when writing the file')
                res.status(404).send('could not write to file');
            } else {
                console.log('write file sucess')
                res.status(200).send(data.data.data);
            }
        });
    })
    .catch((err) => { 
        console.log('sorry i was not able to get the info');
        res.status(404).send('something went wrong with league api call');
    });
};

module.exports = {
    league_api_call : league_api_call
};