const { User } = require('../db');

const updateUserController = async ({name,idName}) => {
    const response = await User.update({name},{
        where:{
            name: idName
        }
    });
    return response;
};

module.exports = updateUserController;