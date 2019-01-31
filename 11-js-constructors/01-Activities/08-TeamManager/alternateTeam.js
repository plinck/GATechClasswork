'use strict';

let Player = require("./Player.js");

// I am using class syntax vs ctor() since I like it better
class Team {
    constructor(name) {
        this.name = name;
        this.currentScore = 0;
        this.players = [];
        this.subs = [];
    }

    // add player
    addPlayer(name, position = "Quarterback", offense = 5, defense = 5, starter = true) {
        let player = new Player(name, position, offense, defense, starter);
        if (player.starter) {
            this.players.push(player);
        } else {
            this.subs.push(player);
        }
    }

    // put a non-starter in for one of the starters
    substitutePlayer() {
        // randomly sub player
        let playerIndexToSub = Math.floor(Math.random() * this.players.length);
        let oldPlayer = this.players[playerIndexToSub];

        let newPlayer;
        // if there is a sub just swap the sub and the current player
        if (this.subs.length > 0) {
            newPlayer = this.subs[0];
            newPlayer.starter = true;
            this.players[playerIndexToSub] = newPlayer;

            oldPlayer.starter = false;
            this.subs[0] = oldPlayer;
        } else {
            // if no one was in subs list, delete the current playere from players and add to subs
            var removed = this.players.splice(playerIndexToSub,1);
            oldPlayer.starter = false;
            this.subs.push(oldPlayer);
        }
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