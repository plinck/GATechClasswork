"use strict";

class Dogs {
    constructor() {
        this.raining = true;
        this.noise = "Woof!";
    }

    makeNoise() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}
class Cats {
    constructor() {
        this.raining = true;
        this.noise = "Meow!";
    }

    makeNoise() {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}



function massHysteria(dog, cat) {
    if (dog.raining && cat.raining) {
        console.log("It is raining cats and dogs");
    }
}

let dogs = new Dogs();
let cats = new Cats();

dogs.makeNoise();
cats.makeNoise();

massHysteria(dogs, cats);
