// Buy Low, Sell High -- Starter Code

// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.2, 1.34, 1.74, 1.18, 1.9, 1.1];
// var stockPrices = [135, 34, 25, 22, 21, 4, 1];
// var stockPrices = [135];

// var functionOne = function() {
//     // Some code
// };
// function functionTwo() {
//     // Some code
// }
// The difference is that functionOne is a function expression and so only defined when that line is reached,
// whereas functionTwo is a function
// declaration and is defined as soon as its surrounding function or script is executed (due to hoisting).

// Your Biggest Profit function
function biggestProfit(stockArray, sharesBought) {

    var boughtAt;
    var soldAt; // always have to sell next one
    var currentProfit; // to minimize loss

    if (stockArray.length < 2) {
        console.log("error, msut have two periods to sell");
        return (0);
    } else {

        boughtAt = stockArray[0];
        soldAt = stockArray[1]; // always have to sell next one
        currentProfit = soldAt - boughtAt; // to minimize loss
    }


    for (let i = 0; i < stockArray.length - 1; i++) {
        // no short sales so only check if you should sell at the next price vs current
        // so, if profit of selling next time period is better, buy this period and sell the next  
        // since lowest buy keeps moving down chain, you will always get lowest price that preceeded sale
        if ((stockArray[i + 1] - stockArray[i]) > currentProfit) {
            boughtAt = stockArray[i];
            soldAt = stockArray[i + 1];
        }
        // move the lowest price to right to keep lowest bought valid
        if (stockArray[i] < stockArray[i + 1]) {
            [stockArray[i + 1], stockArray[i]] = [stockArray[i], stockArray[i + 1]];
        }

        currentProfit = soldAt - boughtAt;

    }
    return currentProfit * sharesBought;
}

// A Call to your Biggest Profit function.
let results = Math.round(biggestProfit(stockPrices, 10000));
console.log(`$${results}`);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.