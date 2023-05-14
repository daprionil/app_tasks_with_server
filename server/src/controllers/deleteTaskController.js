const { Task } = require('../db.js');

const deleteTaskController = async id => {
    const response = await Task.destroy({
        where:{id}
    });
    return response;
};

module.exports = deleteTaskController;