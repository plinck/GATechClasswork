// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// connection
var connection = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = connection.define("character", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
},
{
    freezeTableName: true       // Dont pluralize
}
);

// Syncs with D
Character.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Character;