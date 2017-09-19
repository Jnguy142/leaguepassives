var updateRouter = require('express').Router();
var updateRouterMethods = require('./update_router_handler/update_router_handler.js');
updateRouter.get('/', updateRouterMethods.get);

module.exports = updateRouter;