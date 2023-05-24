const { Task, User } = require('../db.js');

const getATasksController = async id => {
    const task = await Task.findByPk(id,{
        include:{
            model: User,
            attributes:['name','id']
        }
    });

    console.log(task);

    // const task = await Task.findAll({
    //     where:{id}
    // });

    //! Validate response from database
    if(!task) throw new Error('Tarea no encontrada');

    return task.dataValues;
};

module.exports = getATasksController;