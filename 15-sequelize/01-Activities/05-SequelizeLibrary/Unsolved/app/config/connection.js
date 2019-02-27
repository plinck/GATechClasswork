// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
require("dotenv").config();

let connection;

// Creates mySQL connection using Sequelize
if (process.env.INSTANCE_CONNECTION_NAME) {
  console.log("Using GCP DB");
  connection = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    dialect: 'mysql',
    host: '/cloudsql/${INSTANCE_CONNECTION_NAME}',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      socketPath: '/cloudsql/${INSTANCE_CONNECTION_NAME}'
    },
    logging: false,
    operatorsAliases: false
  });
} else {
  console.log("Using Local DB");
  connection = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

// Exports the connection for other files to use
module.exports = connection;