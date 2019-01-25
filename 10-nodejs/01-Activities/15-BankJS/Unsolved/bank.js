// As always, we grab the fs package to handle read/write.
var fs = require("fs");

// Next, we store the text given to us from the command line.
var command = process.argv[2];
var transactionAmount = process.argv[3];

// if 

// total - this should tally up all of the money in the bank balance and display it for the user.

// deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)

// withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)

// lotto -this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.



switch (command) {
    case 'total':
        fs.readFile("bank.txt", 'utf8', function (err, data) {

            // If an error was experienced we will log it.
            if (err) {
                console.log(err);
                return;
            }

            nbrs = data.split(',');
            
            let total = 0;
            nbrs.forEach((nbr) => {
                total += parseFloat(nbr);
            });
           total = total.toFixed(2);
            console.log(total);
        });
        break;
    case 'deposit':
        if (transactionAmount != undefined) {
            fs.appendFile("bank.txt", `,${transactionAmount}`, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`${transactionAmount} Added`);
            });
        }
        break;
    case 'withdraw':
        if (transactionAmount != undefined) {
            fs.appendFile("bank.txt", `,-${transactionAmount}`, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`${transactionAmount} Subtracted`);

            });
        }
        break;

    case 'lotto':
        let guess = Math.floor((Math.random() * 10) + 1);
        if (guess == 5) {
            fs.appendFile("bank.txt", `,100`, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`$100 Lotto Added`);

            });
        } else {
            console.log(`Lost Lotto, go home, guess was ${guess}`);

        }
        break;

}