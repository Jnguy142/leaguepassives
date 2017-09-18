var router = require('express').Router();
var questionRouter = require('./question_router_handler/question-router-methods.js');

router.get('/fetch', (questionRouter.get));
router.post('/create', questionRouter.post);

module.exports = router;