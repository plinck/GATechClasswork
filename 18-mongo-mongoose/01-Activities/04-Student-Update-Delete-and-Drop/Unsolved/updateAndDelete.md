# Updates, Deletes and Drops

## Instructions

* Go back to your classroom database.

```
use classroom
```

1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

```
> db.students.updateMany({}, {$push: {"hobbies": "extremebasketweaving"}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
```

2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

```
> db.students.update({"_id": ObjectId("5c8d892e781fd009a6b46022")}, {$set: {operatingsystem: "win"}})
```

3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

```
> db.students.delete({"_id": ObjectId("5c8d88eb781fd009a6b46021")})
2019-03-19T17:16:09.983-0600 E QUERY    [js] TypeError: db.classrom.delete is not a function :
@(shell):1:1
```

4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.

```
> db.students.updateMany({}, {$set: {gaveCandy: false}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
```

5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

```
> db.students.updateMany({name: "Jim"}, {$set: {gaveCandy: true}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```
