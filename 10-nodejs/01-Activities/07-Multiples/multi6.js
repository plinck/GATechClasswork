"use strict";

console.log(process.argv);

let nbr = process.argv[2];
let divisor = process.argv[3];

if (nbr == undefined) {
    nbr = 25;
    divisor = 6;
}
if (divisor == undefined) {
    divisor = 6;
}

let i = 0;
let sum = 0;
while (i <= nbr) {
    if ((i % divisor) == 0) {
        sum += i;
    }
    i++;
}

console.log(`Total is:${sum}`);