'use strict';

module.exports = function(sequelize, DataTypes) {
  const building = sequelize.define('building', {
  buildingId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  buildingNumber: DataTypes.STRING,
  buildingName: DataTypes.STRING,
  project: DataTypes.STRING,
  buildingSqFt: DataTypes.INTEGER
  }, {
    //tableName: 'Building',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        building.hasMany(models.unit, {
          foreignKey: 'buildingId'
        });
      }
    }

  });
  return building;
};//end of module exports



// #F5C92E
// #253F93
