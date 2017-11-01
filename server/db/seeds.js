use animals;

db.dropDatabase();

db.facts.insert([
  {
    area: "Jungle",
    name: "Macaw",
    type: "Bird",
    img: "http://www.worldatlas.com/r/w728-h425-c728x425/upload/5e/d7/7c/shutterstock-153175595.jpg",
    funFact: "They can live up to 80 years.",
    group: "Flock"
  },
  {
    area: "Jungle",
    name: "Jaguar",
    type: "Mammal",
    img: "http://www.worldatlas.com/r/w728-h425-c728x425/upload/c4/60/01/shutterstock-78913234.jpg",
    funFact: "Like the tiger, jaguars enjoy water and are good at swimming.",
    group: "Jamboree"
  },
  {
    area: "Jungle",
    name: "Poison Dart Frog",
    type: "Amphibian",
    img: "http://www.worldatlas.com/r/w728-h425-c728x425/upload/cb/3b/40/shutterstock-424020241.jpg",
    funFact: "After the tadpoles have hatched, one of the parents will carry them on their back.",
    group: "Army"
  },
  {
    area: "Underwater",
    name: "Jellyfish",
    type: "Invertebrates",
    img: "?",
    funFact: "Jellyfish have no brain but some kinds have eyes.",
    group: "Smack"
  },
  {
    area: "Underwater",
    name: "Pufferfish",
    type: "Fish",
    img: "?",
    funFact: "Pufferfish can change colour based on their environment.",
    group: "School"
  },
  {
    area: "Underwater",
    name: "Dolphin",
    type: "Mammal",
    img: "?",
    funFact: "Dolphins use a blowhole on top of their heads to breathe.",
    group: "Pod"
  }
])


db.quiz.insert([
  {
    habitat: "Jungle",
    question: "What animal is this?",
    answers:[{text: "Jaguar", correct: true}, {text: "Macaw", correct: false}, {text: "Poison Dart Frog", correct: false}],
    img: '/public/images/jaguaredit.png'
  },
  {
    habitat: "Jungle",
    question: "For how long can a Macaw live?",
    answers: [{text: "80 years", correct: true}, {text: "10 years", correct: false}, {text: "45 years", correct: false}],
    img: '/public/images/macawedit.png'
  },
  {
    habitat: "Jungle",
    question: "What do you call a group of Poison Dart Frogs?",
    answers: [{text: "Army", correct: true}, {text: "Jamboree", correct: false}, {text: "Flock", correct: false}],
    img: '/public/images/frog.png'
  },
  {
    habitat: "Underwater",
    question: "What do you call a group of pufferfish?",
    answers: [{text: "School", correct: true}, {text: "Pod", correct: false}, {text: "Smack", correct: false}],
    img: '?'
  },
  {
    habitat: "Underwater",
    question: "Which animal doesn't have a brain?",
    answers: [{text: "Jellyfish", correct: true}, {text: "Dolphin", correct: false}, {text: "Pufferfish", correct: false}],
    img: '?'
  },
  {
    habitat: "Underwater",
    question: "What does a dolphin use to breathe?",
    answers: [{text: "a hole in their head", correct: true}, {text: "nose", correct: false}, {text: "mouth", correct: false}],
    img: '?'
  }
])
