'use strict';

module.exports = function(sequelize, DataTypes) {
  const expenses = sequelize.define('expenses', {
  expensesId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type: DataTypes.STRING,//add field into jade
  buildingNumber: DataTypes.STRING,
  janitorial: DataTypes.DECIMAL,
  grounds: DataTypes.DECIMAL,
  electric: DataTypes.DECIMAL,
  gas: DataTypes.DECIMAL,
  water: DataTypes.DECIMAL,
  leasehold: DataTypes.DECIMAL,
  security: DataTypes.DECIMAL,
  snow: DataTypes.DECIMAL,
  mgtFee: DataTypes.DECIMAL,
  plumbing: DataTypes.DECIMAL,
  trash: DataTypes.DECIMAL,
  elevator: DataTypes.DECIMAL,
  hvac: DataTypes.DECIMAL,
  supplies: DataTypes.DECIMAL,
  fireAlarm: DataTypes.DECIMAL,
  insurance: DataTypes.DECIMAL,
  taxes: DataTypes.DECIMAL
  }, {
    tableName: 'expenses',
    timestamps: false
  });
  return expenses;
};//end of module exports



// #F5C92E
// #253F93
