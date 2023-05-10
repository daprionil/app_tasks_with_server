const express = require('express');

const routerUsers = require('./routerUsers.js');
const routerTasks = require('./routerTasks.js');

//? Create Router
const router = express.Router();

//* Linked others routers
router.use('/users', routerUsers);
router.use('/tasks', routerTasks);


//* Export a main Router
module.exports = router;