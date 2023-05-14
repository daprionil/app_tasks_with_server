const { Task } = require('../db');

const getTasksByUser = async id => {
    const response = await Task.findAll({where:{UserId:id}});
    return response;
};

module.exports = getTasksByUser;