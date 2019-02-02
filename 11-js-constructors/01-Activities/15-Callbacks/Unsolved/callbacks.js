var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

function myFunc(message, aCallback) {
    console.log(message);
    aCallback();
}

// Write a function that runs a function argument if
// its other argument is truthy.
function myTruthy(message, aCallback) {
    if (message == "truthy") {
        console.log("found truthy");
        aCallback();
    } else {
        console.log("not truthy so not firing callback");
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function myFunny(message, aCallback) {
    return (aCallback(message));
}


// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
function writeMyFile(message) {
    fs.writeFile("log.txt", message, (err) => {
        if (err) throw err;
    });
}


myFunc("myFunc", () => {
    console.log("now in callback");

});

myTruthy("truthy", () => {
    console.log("now in truthy callback");

});

myTruthy("not-truthy", () => {
    console.log("now in truthy callback");

});

myFunny("myFunny Hello World", (msg) => {
    console.log(msg);
});

writeMyFile("This message is logged to file inside callback of fs.writeFile");