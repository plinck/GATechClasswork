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
    console.log("Searching for TV Show");
    tv.findShow(term);
    break;
  default:
    console.log("Searching for TV Actor");
    tv.findActor(term);
    break;
}
