let axios = require("axios")
let fs = require("fs")

var TV = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function (show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function (response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;
      //console.log(JSON.stringify(jsonData, null, 4));

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function (err) {
        if (err) throw err;

      });
    });
  };

  this.findActor = function (actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    // Add code to search the TVMaze API for the given actor
    // * The actor's name
    // * The actor's birthday
    // * The actor's gender
    // * The actor's country
    // * The actor's TV Maze URL
    axios.get(URL).then(function (response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;
      //console.log(JSON.stringify(jsonData, null, 4));

      // data ends up being the string containing the show data we will print to the console
      for (i in jsonData) {
        let oneActor = "Actor Name: " + jsonData[i].person.name +
          " Birthday: " + jsonData[i].person.birthday +
          " Gender: " + jsonData[i].person.gender +
          " Country: " + jsonData[i].person.country;

        if (jsonData[i].person._links != null) {
          oneActor += " TV Maze URL: " + jsonData[i].person._links.self.href;
        }

        // Append data and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", oneActor + divider, function (err) {
          if (err) throw err;

        });
      }
    });

  };
};

module.exports = TV;