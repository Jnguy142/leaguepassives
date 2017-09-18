var router = require('express').Router();
var usersRouter = require('./usersRouter.js');
var quizRouter = require('./quizRouter.js');

router.use('/users', usersRouter);
router.use('/passivequiz', quizRouter);
module.exports = router;
