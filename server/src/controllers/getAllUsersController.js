const { User } = require('../db');

const getAllUsersController = async () => {
    const response = await User.findAll();
    return response;
};

module.exports = getAllUsersController