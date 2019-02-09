const inquirer = require("inquirer");
const Database = require("./DatabasePromise.js");

let database = new Database();

function render(rows) {
    const columnWidths = {};

    // first, get header (keys) length and set as default
    // note keys in array of keys so the name is keys[idx]
    let keys = (rows['0'] != undefined) ? Object.keys(rows['0']) : {};
    for (let i in keys) {
        columnWidths[keys[i]] = keys[i].length;
    }

    // Calculate column width based on max row size for each column
    rows.forEach(row => {
        for (let key in row) {
            let str = row[key].toString();
            columnWidths[key] = Math.max(columnWidths[key], str.length);
        }
    });

    // display the header
    let headerText = "|";
    for (let key in columnWidths) {
        headerText += " " + key + " ".repeat(columnWidths[key] - key.length) + " |";
    }
    console.log();
    console.log(headerText.toUpperCase());

    headerText = "|";
    for (let key in columnWidths) {
        headerText += " " + "-".repeat(key.length) + "-".repeat(columnWidths[key] - key.length) + " |";
    }
    console.log(headerText.toUpperCase());

    // Now, print the data
    rows.forEach(row => {
        let rowText = "|";
        for (let key in row) {
            let str = row[key].toString();
            rowText += " " + row[key] + " ".repeat(columnWidths[key] - str.length) + " |";
        }
        console.log(rowText);

    });
}

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
            render(rows);
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
        render(rows);
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
            render(rows);
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
            render(rows);
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