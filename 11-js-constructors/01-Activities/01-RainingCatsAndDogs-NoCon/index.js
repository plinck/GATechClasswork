"use strict";

let dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise : function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

let cats = {
    raining: true,
    noise: "Meow!",
    makeNoise : function() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

function massHysteria(dog, cat) {
    if (dog.raining && cat.raining) {
        console.log("It is raining cats and dogs");
    }
}

massHysteria(dogs, cats);
dogs.makeNoise();
cats.makeNoise();