// Dependencies
var http = require("http");
var fs = require("fs");
const path = require("path");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// directory where html files are
const directory = path.join(__dirname, "/");
const paths = {
  "/": "index.html",
  "/food": "food.html",
  "/movies": "movies.html",
  "/frameworks": "frameworks.html",
};

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our file}
  fs.readFile(directory + paths[req.url], function (err, data) {
    if (err) {
      console.log(`error: ${err}`);
      return;
    }

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});