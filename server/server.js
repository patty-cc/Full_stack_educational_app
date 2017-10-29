var express = require("express");
var app = express();
var path = require('path');
var getAllAnimals = require("./db/db_facts.js");
var getAllQuiz = require("./db/db_quiz.js");

app.use(express.static(__dirname + '/../client/build'));

app.get("/api/animals", function(req, res) {
  getAllAnimals(function(data) {
    res.json(data);
  });
});

app.get("/api/quiz", function(req, res){
  getAllQuiz(function(data){
    res.json(data);
  })
});

app.get("/quiz/jungle", function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


app.listen(3000, function() {
  console.log("it worked");
});
