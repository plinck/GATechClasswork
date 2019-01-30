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
        console.log(`name: ${this.name}`);
        console.log(`profession: ${this.profession}`);
        console.log(`gender: ${this.gender}`);
        console.log(`age: ${this.age}`);
        console.log(`strength: ${this.strength}`);
        console.log(`hitPoints: ${this.hitPoints}`);
    };

    this.isAlive = function () {
        return (this.strength > 0);
    };

    this.gotAttacked = function(otherHitPoints) {
        this.strength -= otherHitPoints;
    };

    //* LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
    this.levelUp = function(ageUp, strengthUp, hitPointsUp) {
        this.age += ageUp;
        this.strength += strengthUp;
        this.hitPoints += hitPointsUp;
    };

};

let darthVador = new Character("Paul", "Stripper", "Male", 35, 40, 20);
let hanSolo = new Character("Cordelle", "HardwareSales", "Male", 35, 40, 20);

darthVador.gotAttacked(hanSolo.hitPoints);
console.log(`-----------------------`);
darthVador.printStats();
console.log(`Is ${darthVador.name} alive? ${darthVador.isAlive()}`);
console.log(`-----------------------`);
hanSolo.printStats();
console.log(`Is ${hanSolo.name} alive? ${hanSolo.isAlive()}`);

hanSolo.gotAttacked(darthVador.hitPoints);
console.log(`-----------------------`);
darthVador.printStats();
console.log(`Is ${darthVador.name} alive? ${darthVador.isAlive()}`);
console.log(`-----------------------`);
hanSolo.printStats();
console.log(`Is ${hanSolo.name} alive? ${hanSolo.isAlive()}`);

hanSolo.gotAttacked(darthVador.hitPoints);
console.log(`-----------------------`);
darthVador.printStats();
console.log(`Is ${darthVador.name} alive? ${darthVador.isAlive()}`);
console.log(`-----------------------`);
hanSolo.printStats();
console.log(`Is ${hanSolo.name} alive? ${hanSolo.isAlive()}`);



