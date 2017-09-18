var Sequelize = require('sequelize');
var { seed } = require('./seed.js');

var db = new Sequelize('postgres://qhzrwewg:mHTp08nRtgHxwVksjbFMrA6DExoYTInf@pellefant.db.elephantsql.com:5432/qhzrwewg');
db.authenticate()
.then(() => {
    console.log('you are in the database')
})
.catch((err) => {
    console.log('there was an error')
});

Users = db.define('Users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

db.sync({force: true}).then(() => {
    seed(Users);
    console.log('successful database initialization')
})
.catch(() => {
    console.log('there was an error synching');
});

module.exports = {
    Users: Users,
}
