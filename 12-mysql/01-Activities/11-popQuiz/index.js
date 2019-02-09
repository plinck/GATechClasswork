let mysql = require("mysql");
let Database = require("./DatabasePromise");

let database = new Database();

database.query("select * from items").then( rows => {
    console.log(rows);
    database.close();
});