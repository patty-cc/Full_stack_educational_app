use animals;

db.dropDatabase();

db.facts.insert([
  {
    area: "Jungle",
    name: "Lion",
    type: "Mammal",
    img: "test",
    funFact: "gibberish",
    group: "pack"
  },
  {
    area: "Jungle",
    name: "Parrot",
    type: "Bird",
    img: "test",
    funFact: "gibberish",
    group: "pack"
  }
])
