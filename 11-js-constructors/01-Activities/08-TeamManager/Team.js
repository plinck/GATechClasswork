'use strict';

let Player = require("./Player.js");

// I am using class syntax vs ctor() since I like it better
class Team {
    constructor(name) {
        this.name = name;
        this.currentScore = 0;
        this.players = [];
    }

    // add player
    addPlayer(name, position = "Quarterback", offense = 5, defense = 5, starter = true) {
        let player = new Player(name, position, offense, defense, starter);
        this.players.push(player);
    }

    // put a non-starter in for one of the starters
    substitutePlayer() {
        // find starter to sub out - just use first one found
        let playerOutIdx = 0;
        let playerInIdx = 0;

        let i = 0;
        let starterFound = false;
        while (i < this.players.length && !found) {
            if (this.players[i].starter) {
                starterFound = true;
                playerOutIdx = i;
            }
            i++;
        }
        // find sub to put in - just use first one found that is a sub
        i = 0;
        let subFound = false;
        while (i < this.players.length && !found) {
            if (!this.players[i].starter) {
                subFound = true;
                playerInIdx = i;
            }
            i++;
        }
        // if we did find a sub, make them starter
        if (subFound) {
            this.players[playerInIdx].starter = true;
        }
        // if we did find a starter, make them the sub
        if (starterFound) {
            this.players[playerOutIdx].starter = false;
        }
    }

    // team good game
    goodGame() {
        this.players.forEach((player) => {
            if (player.starter) {
                player.goodGame();
            }
        });
    }

    // team bad game
    badGame() {
        this.players.forEach((player) => {
            if (player.starter) {
                player.badGame();
            }
        });
    }

    // teams offensive stat for starters
    totalOffense() {
        let totalOffense = 0;
        this.players.forEach((player) => {
            if (player.starter) {
                totalOffense += player.offense;
            }
        });
        return (totalOffense);
    }

    // teams offensive stat for starters
    totalDefense() {
        let totalDefense = 0;
        this.players.forEach((player) => {
            if (player.starter) {
                totalDefense += player.defense;
            }
        });
        return (totalDefense);
    }

    // methods ...
    // Log object info
    log() {
        console.log(`Team name: ${this.name}`);
        console.log(`Current Score: ${this.currentScore}`);
        console.log(`Players`);
        this.players.forEach((player) => {
            console.log();
            player.log();
        });
    };

    // * `printStats`: Method which prints all of the Team's properties to the screen
    printStats() {
        this.log();
    };

    // simplify into data object for transport (e.g. via JSON)
    toData() {
        let data = {
            name: this.name,
            currentScore: this.currentScore,
            players: []
        };
        for (let i in this.players) {
            data.players.push(this.players[i].toData());
        }
        return (data);
    };

    // Convert object to JSON
    toJSON() {
        let data = this.toData();
        return (JSON.stringify(data, null, 4));
    };
}

module.exports = Team;