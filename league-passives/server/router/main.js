var router = require('express').Router();
var usersRouter = require('./usersRouter.js');

router.use('/users', usersRouter);

module.exports = router;
