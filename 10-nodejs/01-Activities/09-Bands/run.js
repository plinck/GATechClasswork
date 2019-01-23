"use strict";
/*global console:false */
/*global process:false */
/*global require:false */

let info = require("./bands.js");

let genre = process.argv[2];

if (genre == undefined) {
    // log them all
    for (let key in info.bands) {
        console.log(`band type:${key}, band name:${info.bands[key]}`);
    }
} else {
    // print the one based on argc passed
    console.log(`Found: ${info.bands[genre]}`);
}