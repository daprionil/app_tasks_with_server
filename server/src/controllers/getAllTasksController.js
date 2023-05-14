const {database} = require('../db');

const getAllTasksController = async () => {
    const response = await database.query('SELECT "Tasks".*, "Users".name AS "UserName" FROM "Tasks" JOIN "Users" ON "Tasks"."UserId"="Users".id ORDER BY "Tasks"."createdAt" DESC;');
    return response[0];
};

module.exports = getAllTasksController;