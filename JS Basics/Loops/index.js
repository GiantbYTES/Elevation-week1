//Ex1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({
    name: names[i],
    age: ages[i],
  });
}
console.log(people);

//Ex2
for (key in people) {
  console.log(`${people[key].name} is ${people[key].age} years old.`);
}

//Ex3
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];
for (key in posts) {
  if (posts[key].id === 2) {
    posts.splice(key, 1);
  }
}
console.log(posts);

//Ex4
const posts2 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

for (key2 in posts2) {
  if (posts2[key2].id === 2) {
    for (key in posts2[key2].comments) {
      if (posts2[key2].comments[key].id === 3) {
        posts2[key2].comments.splice(key, 1);
        break;
      }
    }
  }
}
console.log(posts2[1].comments);

//Ex5
const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

for (let key in dictionary) {
  console.log(`Words that start with ${key}:`);
  for (let i = 0; i < dictionary[key].length; i++) {
    console.log(`${dictionary[key][i]}`);
  }
}
