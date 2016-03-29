'use strict';

module.exports = function(sequelize, DataTypes) {
  const unit = sequelize.define('unit', {
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
    tableName: 'unit',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        unit.hasMany(models.tenant, {
         foreignKey: 'unitId'
        });
      }
    }
  })
  return unit;
};



