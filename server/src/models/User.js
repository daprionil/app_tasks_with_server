const { DataTypes } = require('sequelize');

module.exports = function(database){
    database.define('User',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            len:[4,20]
        }
    })
}