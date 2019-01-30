'use strict';

// weeird syntax but this is the ctor
let Character = function (name, profession="Stripper", gender="Male", age=53, strength=20, hitPoints=50) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;

    this.printStats = function () {
        console.log(this.name);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitPoints);
    };

    this.isAlive = function () {
        return (this.strength > 0);
    };

    this.attack = function(otherHitPoints) {
        this.strength -= otherHitPoints;
    };
};

let newChar = new Character("Paul");
newChar.printStats();
console.log(`Is this character alive? ${newChar.isAlive()}`);

newChar.attack(50);
newChar.printStats();
console.log(`Is this character alive? ${newChar.isAlive()}`);
