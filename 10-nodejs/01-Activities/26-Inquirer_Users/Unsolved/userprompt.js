// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your address?",
            name: "address"
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "Tell me your password",
            name: "password"
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "What is your favorite color?",
            choices: ["Blue", "Red", "Green"],
            name: "favoriteColor"
        },
        // Here we give the user a list to choose from.
        {
            type: "checkbox",
            message: "What is your favorite shape?",
            choices: ["Round", "Triangle", "Trapezoid"],
            name: "favoriteShape"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nYou live at " + inquirerResponse.address);
            console.log("\nYour password " + inquirerResponse.password);
            console.log("\nYour color " + inquirerResponse.favoriteColor);
            console.log("\nYour shape " + inquirerResponse.favoriteShape);
        } else {
            console.log("\nThat's okay come again when you are more sure.\n");
        }
    });