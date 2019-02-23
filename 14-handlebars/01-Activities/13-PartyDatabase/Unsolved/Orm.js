let connection = require("./connection.js");

class Orm {

    constructor() {}

    selectWhere(tableInput, colToSearch, valOfCol, aCallback) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], (err, rows) => {
            if (err) throw err;
            console.log(`$node s{rows}`);
            aCallback(rows);
        });
    }

    select(tableInput, cols, aCallback) {
        var queryString = "SELECT ? FROM ??;";
        connection.query(queryString, [cols, tableInput], (err, rows) => {
            if (err) throw err;
            console.log(`${rows}`);
            aCallback(rows);
        });
    }

    selectAndOrder(whatToSelect, table, orderCol, aCallback) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        connection.query(queryString, [whatToSelect, table, orderCol], (err, rows) => {
            if (err) throw err;
            console.log(`${rows}`);
            aCallback(rows);
        });
    }
}

module.exports = Orm;