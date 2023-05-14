const { Task } = require('../db.js');

const getATasksController = async id => {
    const task = await Task.findAll({
        where:{id}
    });
    return task;
};

module.exports = getATasksController;