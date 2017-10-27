var MongoClient = require("mongodb").MongoClient;

var getAllAnimals = function(takeThisData) {
  MongoClient.connect("mongodb://localhost:27017/animals", function(err, db) {
    db.collection("facts").find().toArray(function(err, docs) {
      console.log(docs);

      takeThisData(docs);
    })
  })
}

module.exports = getAllAnimals;
