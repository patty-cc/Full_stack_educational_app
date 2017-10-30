var getAllAnimals = require('../db/db_facts.js');
var express = require("express");
var animalRouter = express.Router()

animalRouter.get('/jungle', function (req,res) {
  getAllAnimals(function(data) {
    res.json(data)
  })
})

module.exports = animalRouter
