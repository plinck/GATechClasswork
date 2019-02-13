// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 3000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("It Works!! Even Nodemon Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
