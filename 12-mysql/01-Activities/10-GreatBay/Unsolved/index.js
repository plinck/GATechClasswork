"use strict";

const inquirer = require('inquirer');
const async = require('async');
const AuctionModel = require('./AuctionModel');

function renderItems(rows) {
    console.log(`\n----------------------------------------------------------------------\n`);
    for (let i in rows) {
        //console.log(row);      
        let row = rows[i];
        console.log(row.id, row.name, row.description, row.price, row.quantity);
    }
    console.log(`\n----------------------------------------------------------------------\n`);
}

async function getItems() {
    let auctionModel = new AuctionModel();

    try {
        let rows = await auctionModel.getItems();
        renderItems(rows);
        let itemsIDArray = [];
        for (let i in rows) {
            itemsIDArray.push(`${rows[i].id}`);
        }
        return itemsIDArray;
    } catch (err) {
        console.error(`Error trying to insert ${err}`);
    }
}

function postItem() {
    const question = [{
        name: 'itemName',
        message: 'Item name?',
    },
    {
        name: 'price',
        message: 'Price',
    },
    {
        name: 'descriptiom',
        message: 'Description',
    }];
    
    inquirer.prompt(question).then(  answer => {


    });


}

// manager menu
async function mainMenu() {
    let auctionModel = new AuctionModel();
    let itemIDs;

    const question = {
        type: 'list',
        name: 'mainMenu',
        message: 'Would you like to post or bid?',
        choices: ["BID", "POST", "QUIT"]
    };

    //let answer = await inquirer.prompt(question);
    inquirer.prompt(question).then(  answer => {
        switch(answer.mainMenu) {
            case "POST":
            postItem();

            break;
        }


    });

    // switch (answer.mainMenu) {
    //     case "BID":
    //         itemIDs = await getItems();
    //         let answer = await inquirer.prompt([{
    //                 type: 'list',
    //                 name: 'id',
    //                 message: 'Item ID?',
    //                 choices: itemIDs
    //             },
    //             {
    //                 name: 'price',
    //                 message: 'Bid?'
    //             }
    //         ]);
    //         let item_id = parseInt(answer.id);

    //         let newHighBid = false;
    //         let highBid;
    //         try {
    //             let rows = await auctionModel.getHighestBid(item_id);
    //             if (rows == undefined) {
    //                 newHighBid = true;
    //             } else {
    //                 newHighBid = false;
    //                 highBid = rows[0].highBid;
    //             }
    //         } catch (err) {
    //             newHighBid = true;
    //             console.error(`Not found ${err}`);
    //         }

    //         if (newHighBid) {
    //              await auctionModel.insertHighestBid(item_id, answer.price);
    //         } 
    //         else {
    //             if (parseFloat(answer.price) > highBid) {
    //                 console.log("highest bid");
    //                 await auctionModel.updateHighestBid(item_id, answer.price);
    //             } else {
    //                 console.log("Didnt bid high enough");
    //             }
    //         }
    //         break;

    //     case "POST":
    //         itemIDs = await getItems();
    //         let addAnswer = await inquirer.prompt([{
    //                 name: 'name',
    //                 message: 'Product Name?'
    //             },
    //             {
    //                 name: 'description',
    //                 message: 'Description?'
    //             },
    //             {
    //                 name: 'quantity',
    //                 message: 'How Many?'
    //             }, {
    //                 name: 'price',
    //                 message: 'Price?'
    //             }
    //         ]);
    //         await auctionModel.addItem(addAnswer.name, addAnswer.description, addAnswer.price, addAnswer.quantity);
    //         break;
    //     default:
    //         break;
    // }
}

mainMenu();