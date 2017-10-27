var express = require("express");
var app = express();
var getAllAnimals = require("./db/db.js");

app.get("/api/animals", function(req, res) {
  getAllAnimals(function(data) {

    res.json(data);
  });
})

app.listen(3000, function() {
  console.log("it worked");
})
