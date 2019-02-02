var TV = require("./tv");

// Create a new TV object
var tv = new TV();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

var tv = new TV();

if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

switch (search) {
  case "show":
    tv.findShow(term);
    break;
  case "actor":
    tv.findActor(term);
    break;
  default:
    tv.findShow(term);
    break;
}