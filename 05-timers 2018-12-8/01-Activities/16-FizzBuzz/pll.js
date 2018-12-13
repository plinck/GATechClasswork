// Write a script that prints the numbers 1 to 100 in the console
// . But for multiples of three, print `Fizz` instead of the number. 
// For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

for (i = 1; i < 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else {
        if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i%5 == 0) {
            console.log("Buzz");
        } else {
            console.log(`${i} is not a multiple of 5 or 3`);
        }
    }
}