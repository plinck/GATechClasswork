// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyAGv1ljyFxCUDvh3nm4uVV1-eO4R2A_cZc",
  authDomain: "paulsclassdb.firebaseapp.com",
  databaseURL: "https://paulsclassdb.firebaseio.com",
  projectId: "paulsclassdb",
  storageBucket: "paulsclassdb.appspot.com",
  messagingSenderId: "823304786936"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// --------------------------------------------------------------
// Reference where all employees are stored
employeesRef = database.ref("/employees");

// 2. Button for adding Employees
$("#add-employee-btn").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  var startDate = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
  var employeeObj = {
    name: $("#employee-name-input").val().trim(),
    role: $("#role-input").val().trim(),
    startDate: startDate,
    rate: $("#rate-input").val().trim()
  };

  // Add employee object to firebase to the database
  employeesRef.push(employeeObj);

  // an alternative to push is set unique key and 'set' as child
  // This would be useful if you wanted to create your own key that has meaning
  // like a *real* employee ID vs using firebase to generate it.

  /* this works the same as push above, just using firebase getKey to create childs key
  let employeeID = employeesRef.push().getKey();
  let employeeRef = employeesRef.child(employeeID);
  employeeRef.set(employeeObj);
  */

  // Clear text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
// Basically, each time an employee is added, put a new row in the table
employeesRef.on("child_added", function (snap) {
  console.log(snap.val());
  let employeeObj = snap.val();

  // Employee Info
  console.log(employeeObj);

  // Reformat the employee startDate using moment.js
  var startDateMMDDYYYY = moment.unix(employeeObj.startDate).format("MM/DD/YYYY");

  // Calculate the months worked
  var monthsWorked = moment().diff(moment(employeeObj.startDate, "X"), "months");
  console.log(monthsWorked);

  // Calculate the total billed 
  var totalBilled = monthsWorked * employeeObj.rate;
  console.log(totalBilled);

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(employeeObj.name),
    $("<td>").text(employeeObj.role),
    $("<td>").text(startDateMMDDYYYY),
    $("<td>").text(monthsWorked),
    $("<td>").text(employeeObj.rate),
    $("<td>").text(totalBilled)
  );

  // Append the new row to the table
  $("#employee-table-data").append(newRow);
});