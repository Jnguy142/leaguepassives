var router = require('express').Router();
var usersRouter = require('./usersRouter.js');
var quizRouter = require('./quizRouter.js');
var updateRouter = require('./updateRouter.js');

router.use('/users', usersRouter);
router.use('/update', updateRouter);
router.use('/quiz', quizRouter);
module.exports = router;
