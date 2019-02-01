'use strict';

let Student = require("./Student.js");

// I am using class syntax vs ctor() since I like it better
class Classroom {
    constructor(name, professor = "Cordelle", roomNbr="235") {
        this.name = name;
        this.professor = professor;
        this.roomNbr = roomNbr;
        this.students = [];
    }

    // add student
    addStudent(name, favoriteSubject = "Math", GPA = 4.0) {
        let student = new Student(name, favoriteSubject, GPA);
        this.students.push(student);
    }

    nbrOfStudents() {
        return this.students.length;
    }

    // methods ...
    // Log object info
    log() {
        console.log(`Classroom name: ${this.name}`);
        console.log(`Professor: ${this.professor}`);
        console.log(`Room Nbr: ${this.roomNbr}`);
        console.log(`Number of Students: ${this.nbrOfStudents()}`);
        console.log(`Students`);
        this.students.forEach((student) => {
            console.log();
            student.log();
        });
    };

    // * `printStats`: Method which prints all of the Classroom's properties to the screen
    printStats() {
        this.log();
    };

    // simplify into data object for transport (e.g. via JSON)
    toData() {
        let data = {
            name: this.name,
            professor: this.professor,
            roomNbr: this.roomNbr,
            students: []
        };
        for (let i in this.students) {
            data.students.push(this.students[i].toData());
        }
        return (data);
    };

    // Convert object to JSON
    toJSON() {
        let data = this.toData();
        return (JSON.stringify(data, null, 4));
    };
}

module.exports = Classroom;