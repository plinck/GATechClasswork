// Dependencies
// =============================================================
let Sequelize = require("sequelize");

// Create a "Book" model with the following configuration
module.exports = function (connection, DataTypes) {
    let TodoList = connection.define("todolist", {
        text: Sequelize.STRING,
        complete: Sequelize.BOOLEAN
    });
    return TodoList;
};