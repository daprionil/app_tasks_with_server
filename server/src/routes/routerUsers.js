const express = require('express');
const {
    getAUser,
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
} = require('../controllers/UsersControllers.js');
//* Create router for Users

const routerUsers = express.Router();

//? GET all Users
routerUsers.get('/',getAllUsers); //✅

//? GET a User
routerUsers.get('/:name',getAUser); //✅

//? POST - create User
routerUsers.post('/', createUser); //✅

//? DELETE - delete a User
routerUsers.delete('/:name', deleteUser); //✅

//? PUT - Update a User
routerUsers.put('/:name', updateUser); //✅

module.exports = routerUsers;