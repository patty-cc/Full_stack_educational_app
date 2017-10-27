use animals;

db.dropDatabase();

db.facts.insert([
  {
    area: "Jungle",
    name: "Macaw",
    type: "Bird",
    img: "http://www.worldatlas.com/r/w728-h425-c728x425/upload/5e/d7/7c/shutterstock-153175595.jpg",
    funFact: "They can live up to 80 years old",
    group: "Flock"
  },
  {
    area: "Jungle",
    name: "Jaguar",
    type: "Mammal",
    img: "http://www.worldatlas.com/r/w728-h425-c728x425/upload/c4/60/01/shutterstock-78913234.jpg",
    funFact: "Like the tiger, jaguars enjoy water and are good at swimming",
    group: "Jamboree"
  },
  {
    area: "Jungle",
    name: "Poison Dart Frog",
    type: "Amphibian",
    img: "http://www.worldatlas.com/r/w728-h425-c728x425/upload/cb/3b/40/shutterstock-424020241.jpg",
    funFact: "After the tadpoles have hatched, one of the parents will carry them on their back",
    group: "Army"
  }
])

db.quiz.insert([
  {
    habitat: "Jungle",
    question: "What is the animal?",
    correctAnswer: ["Jaguar"],
    incorrectAnswer: ["Macaw", "Poison Dart Frog"],
    img: "fdhjnd"
  },
  {
    habitat: "Jungle",
    question: "How long can a Maccaw live upto?",
    correctAnswer: ["80 Years"],
    incorrectAnswer: ["10 Years", "45 Years"],
    img: "fdhjnd"
  },
  {
    habitat: "Jungle",
    question: "What do you call a group of Poison Dart Frogs?",
    correctAnswer: ["Army"],
    incorrectAnswer: ["Jamboree", "Flock"],
    img: "fdhjnd"
  }
])
