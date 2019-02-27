* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  ORM 

  	- Answer: What advantages does it offer?
	  Maps to data store using native javascriopt objects

  	- Answer: How do I install it? How do I incorporate it into my app?
	  require and then npm install

  	- Answer: What the heck is a Sequelize model? What role will it play?

	  --> It is the Javascript object matching the SQL Table and how we interact with it.
	  representation of table data in sequelize

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

```Javascript
let Country = db.define('Countrys', {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneCode: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    capital: {
        type: Sequelize.STRING
    },
    independenceYear: {
        type: Sequelize.INTEGER
	},
	{
		freezeTableName: true  // do not pluralize
	}
});
```

	- How would I query for all the records where the Independence Year was less than 50 years ago?

```Javascript
Country.findAll({
    where: {
        independenceYear: {$gt: new Date().getFullYear() - 50}
    }
});
```

	- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

```Javascript
Country.findAll({
    limit: 2,
    offset: 2,
    order: [
            ['independenceYear', 'DESC']
        ]
});
```

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it?

```Javascript
Country.update({ country: 'US' }, { where: { independenceYear: 1776 } })
.then((result) => {
    console.log(result);
});
```