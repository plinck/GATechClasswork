"use strict";
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Require the sequelize library (to get Sequelize.op)
const Sequelize = require("sequelize");

let Book = require("../models/book.js");
let Person = require("../models/person.js");


// Routes
// =============================================================
module.exports = function (app) {

    // Add sequelize code to get all books and return them as JSON
    app.get("/api/all", (req, res) => {
        Book.findAll({})
            .then(results => {
                console.log(results.dataValues);
                res.json(results);
            });
    });

    // Add sequelize code to get a specific book and return it as JSON
    app.get("/api/:book", function (req, res) {
        let title = req.params.book;

        Book.findAll({
                where: {
                    title: title
                }
            })
            .then(results => {
                if (results) {
                    console.log(results.dataValues);
                    res.json(results);
                }
            });
    });

    // Add sequelize code to get all books of a specific genre and return them as JSON
    app.get("/api/genre/:genre", function (req, res) {
        let genre = req.params.genre;

        Book.findAll({
                where: {
                    genre: genre
                }
            })
            .then(results => {
                console.log(results.dataValues);
                res.json(results);
            });

    });

    // Add sequelize code to get all books from a specific author and return them as JSON
    app.get("/api/author/:author", function (req, res) {
        let author = req.params.author;

        Book.findAll({
                where: {
                    author: author
                }
            })
            .then(results => {
                console.log(results.dataValues);
                res.json(results);
            });
    });

    // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
    app.get("/api/books/long", function (req, res) {
        const Op = Sequelize.Op;

        // [Op.gt]: 150 : > 150
        // See http://docs.sequelizejs.com/manual/tutorial/querying.html
        // pages > 150
        Book.findAll({
                where: {
                    pages: {
                        [Op.gt]: 150
                    }
                }
            })
            .then(results => {
                console.log(results.dataValues);
                res.json(results);
            });
    });

    // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
    app.get("/api/books/short", function (req, res) {
        const Op = Sequelize.Op;

        // [Op.lte]: 150 : <= 150
        // See http://docs.sequelizejs.com/manual/tutorial/querying.html
        // pages <= 150
        Book.findAll({
                where: {
                    pages: {
                        [Op.lte]: 150
                    }
                }
            })
            .then(results => {
                console.log(results.dataValues);
                res.json(results);
            });
    });

    // Add sequelize code to create a book
    app.post("/api/new", function (req, res) {
        let book = req.body;

        Book.create(book)
            .then(() => {
                res.status(204).end();
            });
    });

    // Add sequelize code to delete a book
    app.delete("/api/book/:id", function (req, res) {
        let id = req.params.id;

        Book.destroy({
                where: {
                    id: id
                }
            })
            .then(() => {
                res.end();
            });
    });
};