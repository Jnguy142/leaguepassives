var quizRouter = require('express').Router();
var quizRouterMethods = require('./quiz_router_handler/quiz_router_handler.js');
quizRouter.get('/', quizRouterMethods.get);

module.exports = quizRouter;