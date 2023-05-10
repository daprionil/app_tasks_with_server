const { DataTypes } = require('sequelize');

module.exports = function(database){
    database.define('Task',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
            len:[5, 100]
        },
        description:{
            type: DataTypes.STRING,
            defaultValue: ''
        }
    })
}