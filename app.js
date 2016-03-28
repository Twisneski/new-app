'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:3000/my-app');

const Building = sequelize.define('building'), {
  buildingId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  buildingNumber: Sequelize.STRING,
  buildingName: Sequelize.STRING,
  project: Sequelize.STRING,
  buildingSqFt: Sequelize.INTEGER
}

const Unit = sequelize.define('unit'), {
  unitId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  unit: Sequelize.INTEGER,
  unitAddress: Sequelize.STRING,
  unitSqFt: Sequelize.INTEGER,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.INTEGER
};

Unit.belongsTo(Building);

const Tenant = sequelize.define('tenant'), {
  tenantId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tenantNumber: Sequelize.STRING,
  leaseId: Sequelize.INTEGER,
  moveInDate: Sequelize.DATE,
  moveOutDate: Sequelize.DATE,
  leaseStartDate: Sequelize.DATE,
  leaseEndDate: Sequelize.DATE,
  typeOfLease: Sequelize.STRING,
  baseRent: Sequelize.DECIMAL,
  commonAreaMaintenance: Sequelize.DECIMAL,
  insurance: Sequelize.DECIMAL,
  taxes: Sequelize.DECIMAL
}

Tenant.belongsTo(Unit);





