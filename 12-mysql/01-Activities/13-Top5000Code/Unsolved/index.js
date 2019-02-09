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
        message: '\n\nLow Range?',
    }, {
        name: 'upRange',
        message: '\n\nUpper Range?',
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

// Main menu
function mainMenu() {
    const question = {
        type: 'list',
        name: 'mainMenu',
        message: '\n\nWhat view do you want?',
        choices: ["Find Songs By Artist",
            "Find All Artists appear more than once",
            "Find data within a specific range",
            "Search for specific song",
            "QUIT"
        ]
    };

    inquirer.prompt(question).then(answer => {
        switch (answer.mainMenu) {
            case "Find Songs By Artist":
                songsByArtist();
                break;
            case "Find All Artists appear more than once":
                artistMoreThanOnce();
                break;
            case "Find data within a specific range":
                songRange();
                break;
            case "Search for specific song":
                songSpecific();
                break;
            case "QUIT":
                console.log("BYE!");
                database.close();
                break;
        }
    });
}

//
mainMenu();