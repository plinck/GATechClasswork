let Orm = require("./Orm.js");
let orm = new Orm();

orm.select("clients", "*", data => {
    console.log(data);
});

orm.select("parties", "*", data => {
    console.log(data);
});

// orm.selectAndOrder("party_name", "parties", "party_name", data => {
//     console.log(data);
// });

// orm.selectWhere("parties", "party_name", "Big Bang Theory",  data => {
//     console.log(data);
// });
