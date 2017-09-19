var router = require('express').Router();
var usersRouter = require('./users_router_handler/users-router-methods.js');

router.get('/fetch', usersRouter.get);
router.post('/create', usersRouter.post);
router.put('/update', usersRouter.put);

module.exports = router;