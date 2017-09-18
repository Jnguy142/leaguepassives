var seedData = require('./seedData.js');
module.exports = {
    seed: function (table) {
        seedData.forEach((data) => {
            table.create(data)
            .then(() => {
                console.log('data successfully seeded');
            })
            .catch(() => {
                console.log('error in data seeding');
            })
        })
    }
}