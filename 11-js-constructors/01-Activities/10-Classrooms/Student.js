'use strict';

// I do not like this weird syntax, but this _is_the constructor
let Student = function(name, favoriteSubject = "Math", GPA = 4.0) {

    // properties
    this.name = name;
    this.favoriteSubject = favoriteSubject;
    this.GPA = GPA;

    // methods ...
    // Log object info
    this.log = function () {
        console.log(`name: ${this.name}`);
        console.log(`favoriteSubject: ${this.favoriteSubject}`);
        console.log(`GPA: ${this.GPA}`);
    };

    // * `printStats`: Method which prints all of the Student's properties to the screen
    this.printStats = function () {
        this.log();
    };


    // simplify into data object for transport (e.g. via JSON)
    this.toData = function () {
        let data = {
            name: this.name,
            favoriteSubject: this.favoriteSubject,
            GPA: this.GPA
        };
        return (data);
    };

    // Convert object to JSON
    this.toJSON = function () {
        let data = this.toData();
        return (JSON.stringify(data, null, 4));
    };
};

module.exports = Student;