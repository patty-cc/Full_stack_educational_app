use animals;

db.dropDatabase();

db.quiz.insert([
  {
    habitat: "Jungle",
    question: "question1",
    correctAnswer: ["answer1"],
    incorrectAnswer: ["answer2", "answer3", "answer4"]
  }
])
