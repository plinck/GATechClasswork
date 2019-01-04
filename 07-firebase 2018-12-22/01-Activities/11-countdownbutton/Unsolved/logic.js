  // Initialize Firebase
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

  // Use the below initialValue
  var initialValue = 100;

  // Use the below variable clickCounter to keep track of the clicks.
  var clickCounter = initialValue;

  // --------------------------------------------------------------

  // At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
  database.ref().on("value", function (snapshot) {
    // get the current clickCount value from firebase DB every time it changes
    clickCounter = snapshot.val().clickCount; // NOTE:  val() is like a dictionary snapshot  i.e. val().click 
    // i.e val() has a bunch of key/va pairs for current snapshot 
    // put the value from the Db into DOM
    $("#click-value").text(snapshot.val().clickCount);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


  // --------------------------------------------------------------

  // Whenever a user clicks the click button
  $("#click-button").on("click", function () {

    // Reduce the clickCounter by 1
    clickCounter--;

    // Alert User and reset the counter
    if (clickCounter === 0) {

      alert("Phew! You made it! That sure was a lot of clicking.");

      clickCounter = initialValue;

    }

    // Save new value to Firebase
    // Update the firebase DB with the new counter
    database.ref().set({
      clickCount: clickCounter
    });


    // Log the value of clickCounter
    console.log(clickCounter);

  });

  // Whenever a user clicks the restart button
  $("#restart-button").on("click", function () {

    // Set the clickCounter back to initialValue
    clickCounter = initialValue;

    // Save new value to Firebase
    // Update the firebase DB with the new counter
    database.ref().set({
      clickCount: clickCounter
    });

    // Log the value of clickCounter
    console.log(clickCounter);

    // Change the HTML Values
    $("#click-value").text(clickCounter);


  });