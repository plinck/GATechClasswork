var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
];

function bubbleSort(unsortedArray) {
    var sortedArr = unsortedArray.slice(0); // Make a COPY of the array to leave unsorted in place
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

const imageArray = files.filter(el => {
    if (/(png$|jpg$|jpeg$|gif)/.test(el)) {
        return el;
    }
});

const movArray = files.filter(el => { 
    if (/(mov$|avi$|mpeg$|mp4|mpg)/.test(el)) {
        return el;
    }
});

console.log(imageArray);
console.log(movArray);