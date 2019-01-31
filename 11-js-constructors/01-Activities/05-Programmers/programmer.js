'use strict';

// I do not like this weird syntax, but this _is_the constructor
let Programmer = function (name, position, age = 53, favoriteLanguage = "Swift") {

    // properties
    this.name = name;
    this.position = position;
    this.age = age;
    this.favoriteLanguage = favoriteLanguage;

    // methods ...
    // print it to console
    this.log = function () {
        console.log(`name: ${this.name}`);
        console.log(`position: ${this.position}`);
        console.log(`age: ${this.age}`);
        console.log(`favoriteLanguage: ${this.favoriteLanguage}`);
    };

    // simplify into data object for transport (e.g. via JSON)
    this.toData = function () {
        let data = {
            name: this.name,
            position: this.position,
            age: this.age,
            favoriteLanguage: this.favoriteLanguage,
        };
        return(data);
    };

    // Convert object to JSON
    this.toJSON = function () {
        let data = this.toData();
        return(JSON.stringify(data, null, 4));
    };
};

module.exports = Programmer;

// Test harness
// let programmer = new Programmer("Paul Linck", "Owner", 53, "Swift");
// programmer.log();