const { User } = require('../db');

const createUserController = async ({name}) => {
    const response = await User.create({name});
    return response.dataValues;
};

module.exports = createUserController;