// Require/import the HTTP module
var http = require("http");

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("No time to give you a fancy response on 7000" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(7000, function() {

  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${7000}`);
});

// Create a generic function to handle requests and responses
function handleRequest7500(request, response) {
  response.end("No time to give you a fancy response on 7000" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest7500);

// Start our server so that it can begin listening to client requests.
server.listen(7500, function() {

  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${7500}`);
});


