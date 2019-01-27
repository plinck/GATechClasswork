// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

var options = {
  provider: 'mapquest',
  httpAdapter: 'https', // Default
  apiKey: 'LuHASw8wc4G766zIKQVc0PtvdUoYpX12', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);

let cityName = process.argv[2];
console.log(cityName);

// Using callback
geocoder.geocode(cityName, (err, res) => {
  console.log(err);
  console.log(JSON.stringify(res, null, 2));
});
