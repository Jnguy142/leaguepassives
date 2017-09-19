var fs = require('fs');
var path = require('path');
var leagueData = path.resolve(__dirname, 
'../update_router_handler/passive_api/local_champ_file.txt'); 

var getRandomPassive = (obj) => {
    var keys = Object.keys(obj);
    var randNum = Math.floor(Math.Random() * 1000) % keys.length;
    return obj[keys[randNum]];
};

module.exports = {
    get: function (req, res) {
        fs.readFile(leagueData, (err, data) => {
            if (err) {
                res.status(404).send('there was an error reading the data file');
            } else {
                var randomPassive = getRandomPassive(JSON.parse(data));
                res.status(200).send(randomPassive);
            }
        })
    },
}