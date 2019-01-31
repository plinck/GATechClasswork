'use strict';

// I do not like this weird syntax, but this _is_the constructor
let Player = function(name, position = "Quarterback", offense = 5, defense = 5, starter = false) {

    // properties
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.starter = starter;

    // * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
    this.goodGame = function () {
        let coinflip = Math.floor(Math.random() * 2);
        if (coinflip == 0) {
            // offense
            this.offense += 1;
        } else {
            // defense
            this.defense += 1;
        }
    };

    // * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
    this.badGame = function () {
        let coinflip = Math.floor(Math.random() * 2);
        if (coinflip == 0) {
            // offense
            this.offense -= 1;
        } else {
            // defense
            this.defense -= 1;
        }
    };

    // methods ...
    // Log object info
    this.log = function () {
        console.log(`name: ${this.name}`);
        console.log(`position: ${this.position}`);
        console.log(`offense: ${this.offense}`);
        console.log(`defense: ${this.defense}`);
        console.log(`starter: ${this.starter}`);
    };

    // * `printStats`: Method which prints all of the player's properties to the screen
    this.printStats = function () {
        this.log();
    };


    // simplify into data object for transport (e.g. via JSON)
    this.toData = function () {
        let data = {
            name: this.name,
            position: this.position,
            offense: this.offense,
            defense: this.defense,
            starter: this.starter
        };
        return (data);
    };

    // Convert object to JSON
    this.toJSON = function () {
        let data = this.toData();
        return (JSON.stringify(data, null, 4));
    };
};

module.exports = Player;