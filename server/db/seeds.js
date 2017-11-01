use animals;

db.dropDatabase();

db.facts.insert([
  {
    area: "Jungle",
    name: "Macaw",
    type: "Bird",
    img: "/public/images/Macaw.png",
    funFact: "They can live up to 80 years.",
    group: "Flock"
  },
  {
    area: "Jungle",
    name: "Jaguar",
    type: "Mammal",
    img: "/public/images/tree-jaguar.png",
    funFact: "Like the tiger, jaguars enjoy water and are good at swimming.",
    group: "Jamboree"
  },
  {
    area: "Jungle",
    name: "Poison Dart Frog",
    type: "Amphibian",
    img: "/public/images/Dart-frog.png",
    funFact: "After the tadpoles have hatched, one of the parents will carry them on their back.",
    group: "Army"
  },
  {
    area: "Underwater",
    name: "Jellyfish",
    type: "Invertebrates",
    img: "/public/images/jellyfishpolaroid.png",
    funFact: "Jellyfish have no brain but some kinds have eyes.",
    group: "Smack"
  },
  {
    area: "Underwater",
    name: "Pufferfish",
    type: "Fish",
    img: "/public/images/blowfishpolaroid.png",
    funFact: "Pufferfish can change colour based on their environment.",
    group: "School"
  },
  {
    area: "Underwater",
    name: "Dolphin",
    type: "Mammal",
    img: "/public/images/dolphinpolaroid.png",
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
    img: '/public/images/pufferedit.png'
  },
  {
    habitat: "Underwater",
    question: "Which animal doesn't have a brain?",
    answers: [{text: "Jellyfish", correct: true}, {text: "Dolphin", correct: false}, {text: "Pufferfish", correct: false}],
    img: '/public/images/jellyFishEdit.png'
  },
  {
    habitat: "Underwater",
    question: "What does a dolphin use to breathe?",
    answers: [{text: "A hole in their head", correct: true}, {text: "Nose", correct: false}, {text: "Mouth", correct: false}],
    img: '/public/images/dolphinquizimage.png'
  }
])
