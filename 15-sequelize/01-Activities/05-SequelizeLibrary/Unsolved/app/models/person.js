const Sequelize = require("sequelize");
const connection = require("../config/connection");

let Person = connection.define("people", {
    name: Sequelize.STRING,
    age: Sequelize.STRING
});

Person.sync();

module.exports = Person;
