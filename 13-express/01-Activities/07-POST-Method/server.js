// Dependencies
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// directory where html files are
const directory = __dirname + "/";
const paths = {
  "/": "index.html"
};

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

  // When the server receives data...
  req.on("data", function (data) {

    console.log("You did a", req.method, "with the data:\n", data);
    res.end();
  });

}

// Start our server
server.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});