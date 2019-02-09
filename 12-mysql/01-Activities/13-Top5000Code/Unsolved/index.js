const inquirer = require("inquirer");
const Database = require("./DatabasePromise.js");
const render = require("./render.js");

let database = new Database();

function songsByArtist() {
    const question = {
        name: 'artist',
        message: '\n\nWhat Artist?',
    };

    inquirer.prompt(question).then(answer => {
        database.query(`
        SELECT * from topSongs
        WHERE  artist = "${answer.artist}"
        ORDER BY song_rank;
        `).then(rows => {
            render.render(rows);
            mainMenu();
        });
    });

}

function artistMoreThanOnce() {

    database.query(`
    SELECT artist, COUNT(artist)
    FROM topSongs
    GROUP BY artist
    HAVING COUNT(artist) > 1
    ORDER BY COUNT(artist) DESC
        `).then(rows => {
        render.render(rows);
        mainMenu();
    });
}

function songRange() {
    const question = [{
        name: 'lowRange',
        message: '\n\nLow Rank Range?',
    }, {
        name: 'upRange',
        message: '\n\nUpper Rank Range?',
    }];

    inquirer.prompt(question).then(answer => {
        database.query(`
        SELECT song_rank, song, artist from topSongs
        WHERE  song_rank > ${answer.lowRange} AND song_rank  < ${answer.upRange}
        ORDER BY song_rank;
        `).then(rows => {
            render.render(rows);
            database.close();
        });
    });
}

function songSpecific() {
    const question = {
        name: 'songName',
        message: '\n\nName of Song?',
    };

    inquirer.prompt(question).then(answer => {
        database.query(`
        SELECT song_rank, song, artist from topSongs
        WHERE  song = "${answer.songName}"
        ORDER BY song_rank;
        `).then(rows => {
            render.render(rows);
            mainMenu();
        });
    });
}

function exitProgram() {
    console.log("BYE!");
    database.close();
}
// Main menu
function mainMenu() {

    const menuItems = {
        "Find Songs By Artist": songsByArtist,
        "Find All Artists appear more than once": artistMoreThanOnce,
        "Find data within a specific range": songRange,
        "Search for specific song": songSpecific,
        "QUIT": exitProgram
    };

    const question = {
        type: 'list',
        name: 'mainMenu',
        message: '\n\nWhat view do you want?',
        choices: Object.keys(menuItems)
    };

    inquirer.prompt(question).then(answer => {
        menuItems[answer.mainMenu]();
    });
}

//
mainMenu();