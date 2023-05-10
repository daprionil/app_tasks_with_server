const {Sequelize} = require('sequelize');

const DefineUserFunction = require('./models/User.js');
const DefineTaskFunction = require('./models/Task.js');

//* Configuration DataBase
const {DB_USER,DB_PASSWORD,DB_HOST,DB_PORT,DB_NAME} = process.env;
const gistUrlSequelize = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

//* Generate database
const database = new Sequelize(gistUrlSequelize,{logging: false});

//? Define models
DefineTaskFunction(database);
DefineUserFunction(database);

//? Define relations
const {Task, User} = database.models;
User.hasMany(Task, {foreignKey:'UserId'});
Task.belongsTo(User);

//*==================*
module.exports = {
    database,
    ...database.models
}