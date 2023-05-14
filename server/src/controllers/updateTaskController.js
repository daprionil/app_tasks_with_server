const { Task } = require('../db.js');

const updateTaskController = async ({data,id}) => {
    console.log({data,id});
    const user = await Task.update({...data},{
        where:{id}
    });
    return user[0];
};

module.exports = updateTaskController;