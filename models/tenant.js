'use strict';

module.exports = function(sequelize, DataTypes) {
  const Tenant = sequelize.define('tenant', {
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
  taxes: DataTypes.DECIMAL,
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
    tableName: 'Tenant',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Tenant.belongsTo(models.unit, {
          foreignKey: 'TenantId'
        });
      }
    }
  })
  return Tenant;
};



