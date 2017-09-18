var { league_api_call } = require('./passive_api/passive_api.js')

module.exports = {
    get: function (req, res) {
        league_api_call(req, res);
        console.log('get a random passive');
    }
}