var router = require('express').Router();
var usersRouter = require('./usersRouter.js');
var quizRouter = require('./quizRouther.js');

router.use('/users', usersRouter);
router.user('/passivequiz', quizRouter);
module.exports = router;
