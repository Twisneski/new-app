'use strict';

module.exports = function(sequelize, DataTypes) {
  const tenant = sequelize.define('tenant', {
  tenantId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tenantNumber: DataTypes.STRING,
  leaseId: DataTypes.INTEGER,
  moveInDate: DataTypes.DATE,
  moveOutDate: DataTypes.DATE,
  leaseStartDate: DataTypes.DATE,
  leaseEndDate: DataTypes.DATE,
  typeOfLease: DataTypes.STRING,
  baseRent: DataTypes.DECIMAL,
  commonAreaMaintenance: DataTypes.DECIMAL,
  insurance: DataTypes.DECIMAL,
  taxes: DataTypes.DECIMAL
  }, {
    tableName: 'tenant',
    timestamps: false
  })
  return tenant;
};



