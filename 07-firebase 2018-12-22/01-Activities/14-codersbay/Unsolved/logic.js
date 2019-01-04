// Initialize Firebase
//  START CODING BELOW!!
var config = {
  apiKey: "AIzaSyAGv1ljyFxCUDvh3nm4uVV1-eO4R2A_cZc",
  authDomain: "paulsclassdb.firebaseapp.com",
  databaseURL: "https://paulsclassdb.firebaseio.com",
  projectId: "paulsclassdb",
  storageBucket: "paulsclassdb.appspot.com",
  messagingSenderId: "823304786936"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    let newObj = snapshot.val();

    highPrice = newObj.highPrice;
    highBidder = newObj.highBidder;


    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);


    // Print the data to the console.
    console.log(newObj);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(initialBid);
    $("#highest-price").text(initialBidder);


    // Print the data to the console.
    console.log(`bid: ${initialBid}, bidder: ${initialBidder}`);

  }


  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  let bidderPrice = parseInt($("#bidder-price").val());
  let bidderName = $("#bidder-name").val();
  console.log(`bid: ${bidderPrice}, bidder: ${bidderName}`);


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    let newObj = {};
    newObj.highPrice = bidderPrice;
    newObj.highBidder = bidderName;

    database.ref().set(newObj);

    // Log the new High Price
    console.log(newObj);

    // Store the new high price and bidder name as a local variable
    highBidder = newObj.highBidder;
    highPrice = newObj.highPrice;

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);


  } else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});