const express = require('express');
const {
    getATask,
    getAllTasks,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/TasksControllers.js');

//* Create router for Tasks
const routerTasks = express.Router();

//? GET all tasks
routerTasks.get('/',getAllTasks); //✅

//? GET a Task
routerTasks.get('/:id',getATask); //✅

//? POST - create task
routerTasks.post('/', createTask); //✅

//? DELETE - delete task
routerTasks.delete('/:id', deleteTask); //✅

//? PUT - create task
routerTasks.put('/:id', updateTask); //✅

module.exports = routerTasks;