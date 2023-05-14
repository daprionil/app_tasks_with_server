const { User } = require('../db');

const deleteUserController = async ({name}) => {
    const response = await User.destroy({
        where:{
            name
        }
    });
    return response;
};

module.exports = deleteUserController;