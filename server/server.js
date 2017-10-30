var express = require("express");
var app = express();
var animalRouter = require('./controller/animalController.js')

app.use(express.static(__dirname + '/../client/build'))

app.get("/info/jungle", function(req, res) {
  res.sendFile("../../client/build/public/info.html")
})

// app.get("/desert", function(req, res) {
//   res.sendFile("../")
// })
//
// app.get("/jungle", function(req, res) {
//   res.sendFile("../")
// })


// app.get("/api/quiz", function(req, res){
//   getAllQuiz(function(data){
//     res.json(data);
//   })
// })


app.use("/api/animals", animalRouter)


app.listen(3000, function() {
  console.log("it worked");
})
