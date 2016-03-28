'use strict';

module.exports = function(sequelize, DataTypes) {
  const Building = sequelize.define('building', {
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
    tableName: 'Building',
    timestamps: false,
  });
  return Building;
};//end of module exports



