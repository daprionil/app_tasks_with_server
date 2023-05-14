const {Task} = require('../db.js');

const createTaskController = async (data) => {
    const createdTask = await Task.create(data);
    return createdTask.dataValues;
};

module.exports = createTaskController;