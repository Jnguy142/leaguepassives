var db = require('../../database/maindb.js');

module.exports = {
    get: (req, res) => {
        res.status(200).send('you made a get request to /users/fetch');
    },
    post: (req, res) => {
        db.Users.findOrCreate({
            where: {username: req.body.username} ,
            defaults: {username: req.body.username , score: 0}
        })
        .spread((user, created) => {
            
            res.status(201).send({
                username: user.dataValues.username,
                score: user.dataValues.score,
            });
        })
    },
    put: (req, res) => {
        db.Users.update({score: req.body.score}, {where:{username: req.body.username}, returning:true})
        .then((data) => {
            var updatedScore = data[1][0].dataValues.score;
            res.status(201).send({ 
                username: req.body.username, 
                score: updatedScore, 
            });
        })
        .catch(() => {
            res.status(404).send('something went wrong with the update');
        });
    },

};