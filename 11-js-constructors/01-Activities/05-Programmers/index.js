"use strict";

const Programmer = require("./programmer.js");

// Test harness
let programmer = new Programmer("Paul Linck", "Owner", 53, "Swift");
programmer.log();
console.log(programmer.toJSON());