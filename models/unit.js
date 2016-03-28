'use strict';

module.exports = function(sequelize, DataTypes) {
  const Unit = sequelize.define('unit', {
  unitId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  unit: DataTypes.INTEGER,
  unitAddress: DataTypes.STRING,
  unitSqFt: DataTypes.INTEGER,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zip: DataTypes.INTEGER
}, {
    tableName: 'Unit',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Unit.belongsTo(models.building, {
          foreignKey: 'UnitId'
        });
      }
    }
  })
  return Unit;
};



