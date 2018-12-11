// Use the array provided below.
// This was done in 05-timers, activity 13
var unsortedArr = [
    1, 326, 251, 24, 284, 364, 287, 74, 89,
    63, 455, 130, 408, 378, 333, 49, 69, 335,
    195, 145, 122, 454, 30, 277, 208, 293, 311,
    88, 32, 5, 304, 239, 448, 61, 98, 382, 401,
    264, 84, 300, 204, 482, 168, 67, 218, 331, 21, 473,
    292, 332, 209, 244, 196, 179, 472, 279, 40, 486, 270, 185,
    181, 485, 495, 81, 169, 294, 79, 400, 92, 104, 249
];

// Bubble Sort Interview Questions:

// Bubble Sort is a simple sorting algorithm that works by
// repeatedly swapping the adjacent elements if they are in wrong order.
// It goes through the array (array.length * array.length) times
// conceputally, each time the inner loops runs it can push the largest
// value to the end of the array whilst sorting pairs on the way so by the
// time you get to the end of the outer array, it at most hs to push one item to the end
// by doing this the lowest one gets push towards the front at least one index for each
// index of the outer loop - i.e. one pass of the inner
function bubbleSort(unsortedArray) {
    var sortedArr = unsortedArray.slice(0);       // Make a COPY of the array to leave unsorted in place
    var i; // outer loop
    var j; // inner loop

    for (i = 0; i < sortedArr.length; i++) {
        for (j = 0; j < sortedArr.length - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // swap if items in wrong order
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }

    return sortedArr;
} // function

// Display the unsorted array in the `#start` div of `index.html`.
let startID = document.getElementById("start");
startID.innerHTML = unsortedArr;

// When the user clicks the `button` in index.html,
// the sorted result should be displayed in the `#result` div.
document.getElementById("go").onclick = function() {
    let resultID = document.getElementById("result");
    resultID.innerHTML = bubbleSort(unsortedArr);      
};