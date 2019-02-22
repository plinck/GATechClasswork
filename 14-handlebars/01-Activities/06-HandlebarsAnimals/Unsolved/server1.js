// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Data
var animals = [{
    name: 'Dog',
    pet: true,
    fierceness: 10
  },
  {
    name: 'cat',
    pet: true,
    fierceness: 10
  },
  {
    name: 'lion',
    pet: false,
    fierceness: 10
  },
  {
    name: 'tiger',
    pet: false,
    fierceness: 10
  },
  {
    name: 'Bear',
    pet: false,
    fierceness: 10
  }
];

// Routes
app.get("/animal/:name", function (req, res) {
  let name = req.params.name;

  console.log(`Searching for: ${name}`);

  animals.forEach(animal => {
    if (name == animal.name) {
      res.render("dog", animal);
    }
  });
});

app.get("/", function (req, res) {
  res.redirect("/pets");
});

app.get("/pets", function (req, res) {
  let pets = [];
  animals.forEach(animal => {
    if (animal.pet) {
      pets.push(animal);
    }
  });

  console.log(`Showing /pets: ${pets}`);

  res.render("index", {
    animals: pets
  });
});

app.get("/nonpets", function (req, res) {
  let pets = [];
  animals.forEach(animal => {
    if (!animal.pet) {
      pets.push(animal);
    }
  });

  console.log(`Showing /nonpets: ${pets}`);

  res.render("index", {
    animals: pets
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});