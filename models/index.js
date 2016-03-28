"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var POSTGRES_URL = process.env.POSTGRES_URL || "postgres://localhost:5432/leasedb"
var sequelize = new Sequelize(POSTGRES_URL);

var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
