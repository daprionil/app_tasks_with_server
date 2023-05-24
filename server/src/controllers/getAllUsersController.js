const { User, Task } = require('../db');

const getAllUsersController = async () => {
    const response = await User.findAll({
        include:{
            model: Task,
        }
    });
    return response;
};

module.exports = getAllUsersController