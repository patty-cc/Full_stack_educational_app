var express = require("express");
var app = express();
var getAllAnimals = require("./db/db_facts.js");
var getAllQuiz = require("./db/db_quiz.js");

app.get("/api/animals", function(req, res) {
  getAllAnimals(function(data) {

    res.json(data);
  });
})

app.get("/api/quiz", function(req, res){
  getAllQuiz(function(data){
    res.json(data);
  })
})




app.listen(3000, function() {
  console.log("it worked");
})
