// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

let nodeArgs = process.argv.slice(2);

let sortedArray = nodeArgs.sort((a,b) => {
    return (a - b); 
});
console.log(sortedArray);

