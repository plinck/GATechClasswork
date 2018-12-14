// * Write a function that checks to see if a number is a prime number or not
// . Have it return `true` if it is, or `false` if it isn't.
// * A Prime number is a number greater than one that can only be divided by one and itself.

function isPrime(number) {
    let i = 0;

    if (number <= 1) {
        return false;
    }

    isPrimeNumber = true;
    // check to see if it is divisible by anything else
    for (i = 2; i < number; i++) {
        if ((number % i) == 0) {
            return false; // not prime, st
        }
    }
    return isPrimeNumber;
}

let nbr = 10;

if (isPrime(nbr)) {
    console.log(`${nbr} is prime`);
} else {
    console.log(`${nbr} is not prime`);
}

function myFunction() {
    // Get the value of the input field with id="numb"
    let nbrId = document.getElementById("numb");
    let messageId = document.getElementById("message");
    let nbr = parseInt(nbrId.value);

    if (isPrime(nbr)) {
        messageId.innerHTML = `${nbr} is prime`;
        console.log(`${nbr} is prime`);
    } else {
        messageId.innerHTML = `${nbr} is not prime`;
        console.log(`${nbr} is not prime`);
    }

}