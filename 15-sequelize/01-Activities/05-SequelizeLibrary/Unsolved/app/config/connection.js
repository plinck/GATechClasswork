// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
require("dotenv").config();

let connection;     // database connecton for sequelize

// Common Config no matter which DB host used
let config = {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        underscored: false,
        freezeTableName: true,
        timestamps: true
    },
    logging: false,
    operatorsAliases: false
};

// Creates mySQL connection using Sequelize
if (process.env.JAWSDB_URL) {
    // Connection for JawsDB on heroku just uses connection string
    console.log("Using JAWSDB");
    connection = new Sequelize(process.env.JAWSDB_URL, config);
} else if (process.env.INSTANCE_CONNECTION_NAME) {
    // Google Cloud Platform Connection
    console.log("Using GCP DB");
    config.host = '/cloudsql/${INSTANCE_CONNECTION_NAME}';
    config.dialectOptions = {
        socketPath: '/cloudsql/${INSTANCE_CONNECTION_NAME}'
    };
    connection = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, config);
} else {
    console.log("Using Local DB");
    config.host = "localhost";
    config.port = 3306;
    connection = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, config);
}

// Exports the connection for other files to use
module.exports = connection;