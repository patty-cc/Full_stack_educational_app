var express = require("express");
var app = express();
var animalRouter = require('./controller/animalController.js')

app.use(express.static(__dirname + '/../client/build'))



// app.get("/api/quiz", function(req, res){
//   getAllQuiz(function(data){
//     res.json(data);
//   })
// })


app.use("/api/animals", animalRouter)


app.listen(3000, function() {
  console.log("it worked");
})
