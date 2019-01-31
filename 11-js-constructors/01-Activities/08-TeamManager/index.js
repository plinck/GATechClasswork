"use strict";

const inquirer = require("inquirer");

const Player = require("./Player.js");
const Team = require("./Team.js");

// Player Test harness
// let player = new Player("Tom Brady", "Quarterback", 9, 1);

// player.log();
// console.log(player.toJSON());

// for now the game is played with one team, but it should be enhanced to play teams against each other
async function playGame(team) {
    for (let i = 0; i < 5; i++) {
        let rnd1 = Math.floor(Math.random() * 20 + 1);
        let rnd2 = Math.floor(Math.random() * 20 + 1);

        if (rnd1 < team.totalOffense()) {
            console.log('\nOffense scored, you get a point!\n');
            team.currentScore += 1;
        }
        if (rnd2 > team.totalDefense()) {
            console.log('\nDefense scored, you lose a point!\n');
            team.currentScore -= 1;
        }
        // - TODO * After the score has been changed, prompt the user to allow them to substitute 1 player
        // from within the starters array with the player from within the subs array.
    }
    // Game ran
    if (team.currentScore > 0) {
        console.log("\nPostive outcome, you all get goodGame");
        team.goodGame();
    } else if (team.currentScore < 0) {
        console.log("\nNegative outcome, you all get badGame");
        team.badGame();
    }
    console.log("\nAfter the game, here is the team info after the game");
    console.log("--------------------------------------------------------");
    team.log();

    // - TODO * After printing the results, ask the user if they would like to play again.
    // * Run `playGame` from the start once more if they do.
    // * End the program if they don't.

}

// Get team input
function addPlayer(team, count) {
    if (count > 0) {
        // runs inquirer for players name
        inquirer.prompt([{
                    name: "name",
                    message: "Player Name?"
                }, {
                    name: "position",
                    message: "Player position?"
                }, {
                    name: "offense",
                    message: "Offense strength (1-10)?"
                }, {
                    name: "defense",
                    message: "Defense strength (1-10)?"
                },
                {
                    type: 'list',
                    name: 'starter',
                    message: 'Player is a starter?',
                    choices: ["true", "false"]
                }
            ])
            .then(function (player) {
                let playero, playerd, starterBool;
                starterBool = (player.starter == 'true') ? true : false;

                if (player.starter == 'true') {
                    starterBool = true;
                };

                if (isNaN(player.offense) || player.offense < 1 || player.offense > 10) {
                    playero = 5;
                }
                if (isNaN(player.defense) || player.defense < 1 || player.defense > 10) {
                    playerd = 5;
                }
                team.addPlayer(player.name, player.position, playero, playerd, starterBool);

                // one less player to add
                count -= 1;
                // get next player
                addPlayer(team, count);
            });
    } else {
        console.log("All players entered, here is your team");
        team.log();
        console.log("Game is now gonna play\n");
        playGame(team);
    }
};

// Team Test harness
let team1 = new Team("New England Patriots");
team1.addPlayer("Tom Brady", "Quarterback", 9, 1, true);
team1.addPlayer("Gronk", "End", 9, 5, true);
team1.addPlayer("Paul", "DB", 5, 10, false);

team1.log();
playGame(team1);

// call askquestion to run our code
// let team2 = new Team("Los Angeles Rams");
// let count = 3;
// addPlayer(team2, count);