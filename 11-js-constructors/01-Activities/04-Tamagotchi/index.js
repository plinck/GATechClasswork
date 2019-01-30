'use strict';

// I do not like this weird syntax, but this _is_the constructor
let DigitalPal = function (name, hungry, sleepy = false, bored = false, age = 10) {

    // properties
    this.name = name;
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    // methods ...
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("I dont want any food, I am not hungry!");

        }
    };

    this.sleep = function () {
        if (this.sleepy) {
            console.log("zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("I am not tired, no way I am sleeping");
        }
    };

    this.play = function () {
        if (this.bored) {
            console.log("Yah! Lets play");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("I dont want to play, get lost.  I can occupy myself!");

        }
    };

    this.increaseAge = function () {
        this.age += 1;
        console.log(`Happy Birthday, you are now ${this.age} years old`);
    };

    this.printStats = function () {
        console.log(`name: ${this.name}`);
        console.log(`hungry: ${this.hungry}`);
        console.log(`sleepy: ${this.sleepy}`);
        console.log(`bored: ${this.bored}`);
        console.log(`age: ${this.age}`);
    };
};

// let DigitalPal = function (name, hungry, sleepy=false, bored=false, age=10) {
let dog = new DigitalPal("Dog", false, false, false, 10);
dog.outside = false;
dog.bark = function () {
    console.log('Woof! Woof!');
};
dog.goOutside = function () {
    console.log('yes,I love outdoors');
    this.bark();
    if (this.outside) {
        console.log('But I am outside already');
    }
};
dog.goInside = function () {
    console.log('I hate inside');
    if (!this.outside) {
        console.log('But I am inside already');
    }
    this.outside = false;
};
dog.printStats();

let cat = new DigitalPal("Cat", false, false, false, 10);
cat.houseCondition = 100;
cat.meow = function () {
    console.log('Meow, jesus, this is boring!');
};
cat.destroyFurniture = function () {
    if (this.houseCondition <= 0) {
        console.log("house is already destroiyed");
    } else {
        console.log('I hate your house');
        this.houseCondition -= 10;
    }
};
cat.buyFurniture = function () {
    console.log('I love your house');
    this.houseCondition += 50;
};

let command = process.argv[2];

switch (command) {
    case `feed`:
        dog.feed();
        break;
    case `sleep`:
        dog.sleep();
        break;
    case `play`:
        dog.play();
        break;
    case `q`:
        return;

    default:
        console.log("please try 'feed', 'eat', or 'play'");
}