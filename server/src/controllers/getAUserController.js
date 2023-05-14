const { User } = require('../db');

const getAUserController = async name => {
    const response = await User.findAll({
        where:{
            name
        }
    });
    return response[0];
};

module.exports = getAUserController;