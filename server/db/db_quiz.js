var MongoClient = require("mongodb").MongoClient;

var getAllQuiz = function(takeThisData) {
  MongoClient.connect("mongodb://localhost:27017/animals", function(err,db) {
    db.collection("quiz").find().toArray(function(err,docs){
      // console.log(docs);

      takeThisData(docs);
    })
  })
}
module.exports = getAllQuiz;
