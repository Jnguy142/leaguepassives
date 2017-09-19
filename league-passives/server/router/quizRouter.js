var quizRouter = require('express').Router();
var quizRouteHandler = require('./quiz_router_handler/quiz_router_handler.js');

quizRouter.get('/', quizRouteHandler.get);

module.exports = quizRouter;