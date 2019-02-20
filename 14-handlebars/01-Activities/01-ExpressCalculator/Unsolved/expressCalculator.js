"use strict";

// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

app.get("/math/:equation", (req, res) => {
  let equation = req.params.equation;

  let pattern = /(\d+\s*(\*|\/|\+|\-)\s*)+(\d+\s*)/;
  pattern = /\d+/g;
  let NbrArray = equation.match(pattern);
  console.log(`nbrarray:${NbrArray}`);

  pattern = /(\*|\/|\+|\-)/;
  let operator = equation.match(pattern);

  console.log(`${NbrArray[0]} ${operator[0]} ${NbrArray[1]} =`);
});

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:nbr1/:nbr2",  (req, res) => {
  // TODO parse out the variables from the request
  let operation = req.params.operation;
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  let nbr1 = parseInt(req.params.nbr1);
  let nbr2 = parseInt(req.params.nbr2);

  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      result = nbr1 + nbr2;
      break;
    case "subtract":
      result = nbr1 - nbr2;
      break;
    case "multiply":
      result = nbr1 * nbr2;
      break;
    case "divide":
      result = nbr1 / nbr2;
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});