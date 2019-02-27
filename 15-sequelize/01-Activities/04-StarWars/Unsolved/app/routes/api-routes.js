// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../model/character");

// Routes
// =============================================================
module.exports = function (app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:character?", function (req, res) {
    console.log(`param: ${req.params.character}`);

    // If the user provides a specific character in the URL...
    if (req.params.character) {
      Character.findOne({
          where: {
            name: req.params.character
          }
        })
        .then(function (results) {
          console.log(results);
          res.json(results);
        });
    } else {
      Character.findAll({})
        .then(function (results) {
          console.log(results);
          res.json(results);
        });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {

    // Take the request...
    var character = req.body;

    Character.create(character).then(function (results) {
      console.log(results);

      res.end();
    });

  });
};