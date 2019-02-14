// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do?
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do?
// logs a specific character that is sent in the url parm e.g. "localhost:3000/api/characters/yoda"
app.get("/api/characters/:character", function(req, res) {
  // What does this code do? ==> logs a specific character that is sent in the urlparm e.g. "localhost:3000/api/characters/yoda"
  var chosen = req.params.character;
  console.log(chosen);


  // What does this code do?
  // Finds the char with the routeName that matches route name sent in URL
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
