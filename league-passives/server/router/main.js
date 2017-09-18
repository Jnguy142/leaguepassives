var router = require('express').Router();
var questionRouter = require('./questionRouter.js');

router.use('/question', questionRouter);

module.exports = router;
