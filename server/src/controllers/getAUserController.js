const { User, Task } = require('../db');

const getAUserController = async name => {
    const response = await User.findOne({
        where:{
            name
        },
        include:{
            model: Task,
        }
    });
    
    //! Validate SELECT database
    if(!response) throw new Error('El usuario en solicitud no existe');

    return response.dataValues;
};

module.exports = getAUserController;