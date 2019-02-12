function myFunc(arr, aCallback) {
    let outputArray = [];
    for (let i in arr) {
        if (aCallback(arr[i])) {
            outputArray.push(arr[i]);
        }
    }
    console.log(outputArray);
}

myFunc([1, 2, 3], function (nbr) {
    return (nbr == 2);
});