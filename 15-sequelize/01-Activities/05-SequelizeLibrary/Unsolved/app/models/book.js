// Dependencies
// =============================================================

// Require the sequelize library
const Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
const connection = require("../config/connection");

// Create a "Book" model with the following configuration
let Book = connection.define("books", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER,
}
// {
//     freezeTableName: true       // Dont pluralize
// }
);

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;
