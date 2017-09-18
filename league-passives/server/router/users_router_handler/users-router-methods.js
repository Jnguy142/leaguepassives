module.exports = {
    get: (req, res) => {
        res.status(200).send('you made a get request to /users/fetch');
    },
    post: (req, res) => {
        res.status(201).send('you made a post requestion to /users/create');
    }
};