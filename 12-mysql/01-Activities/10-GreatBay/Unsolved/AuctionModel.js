let Database = require("./DatabasePromise");

class AuctionModel {
    constructor() {}
    getItems() {
        let database = new Database();
        let promise = new Promise((resolve, reject) => {
            database.query("SELECT * FROM auctionItems")
                .then(rows => {
                    resolve(rows);
                })
                .catch(err => {});
        });

        database.close();
        return promise;
    }

    getItemByID(productID) {
        let database = new Database();

        let promise = new Promise((resolve, reject) => {

            database.query(`SELECT id, name, description,; price, quantity
            FROM auctionItems
            WHERE auctionItems.id = ${productID};`)
                .then(rows => {
                    resolve(rows);
                })
                .catch(err => {
                    reject(err);
                });
        });

        database.close();
        return promise;
    }

    addItem(name, description, price, quantity) {
        let database = new Database();

        let promise = new Promise((resolve, reject) => {

            database.query(`INSERT INTO auctionItems (name, description, price, quantity)
            VALUES ("${name}", "${description}", ${price}, ${quantity});`)
                .then(rows => {
                    resolve("Added Item");
                })
                .catch(err => {
                    reject(err);
                });
        });

        database.close();
        return promise;
    }

    insertHighestBid(item_id, highBid) {
        let database = new Database();

        let promise = new Promise((resolve, reject) => {

            database.query(`INSERT INTO bids (item_id, highBid)
            VALUES ("${item_id}", ${highBid});`)
                .then(rows => {
                    resolve("Added bid");
                })
                .catch(err => {
                    reject(err);
                });
        });

        database.close();
        return promise;
    }
    
    updateHighestBid(item_id, highBid) {
        let database = new Database();

        let promise = new Promise((resolve, reject) => {

            database.query(`UPDATE bids SET highBid = ${highBid} WHERE item_id = ${item_id}`)
                .then(rows => {
                    resolve("Added bid");
                })
                .catch(err => {
                    reject(err);
                });
        });

        database.close();
        return promise;
    }

    getHighestBid(item_id) {
        let database = new Database();

        let promise = new Promise((resolve, reject) => {
            database.query(`SELECT highBid FROM bids WHERE item_id = ${item_id};`)
                .then(rows => {
                    resolve(rows);
                })
                .catch(err => {
                    reject(err);
                });
        });

        database.close();
        return promise;
    }

}

module.exports = AuctionModel;