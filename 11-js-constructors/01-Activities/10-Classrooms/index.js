"use strict";

const inquirer = require("inquirer");

const Classroom = require("./Classroom.js");

async function addStudent(classroom) {
    const studentQuestion = [{
            name: "name",
            message: "Student Name?"
        },
        {
            name: "favoriteSubject",
            message: "Favorite Subject?"
        },
        {
            name: "GPA",
            message: "GPA?"
        },
        {
            name: "more",
            message: "Add More Students (y=yes)?"
        }
    ];

    let done = false;
    console.log(`Add students to class: ${classroom.name}`);
    while (!done) {
        let studentInfo = await inquirer.prompt(studentQuestion);
        classroom.addStudent(studentInfo.name, studentInfo.favoriteSubject, studentInfo.GPA);

        if (studentInfo.more != 'y') {
            done = true;
        }
    }
    classroom2.log();

}

//  Test harness
// let classroom1 = new Classroom("Full Stack Class", "Cordelle", "235");
// classroom1.addStudent("Paul Linck", "Math", 4.0);
// classroom1.addStudent("JD", "Reading", 3.1);

// classroom1.log();

let classroom2 = new Classroom("Full Stack Class", "Cordelle", "235");
addStudent(classroom2);
