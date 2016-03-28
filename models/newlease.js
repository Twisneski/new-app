"use strict"

module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Building", {
        title:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
       tableName: 'Tasks'
    });

    return Tasks;
}
