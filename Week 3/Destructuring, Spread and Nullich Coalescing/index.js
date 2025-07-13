//The Factory Mistake
let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

let meatArray = [...meatArr, ...vegetableArr].filter((i) => {
  return i === "rabbit" || i === "beef" || i === "chicken";
});
let vegtableArray = [...meatArr, ...vegetableArr].filter((i) => {
  return i !== "rabbit" && i !== "beef" && i !== "chicken";
});

console.log(meatArray);
console.log(vegtableArray);

//The Torn Passport
const firstPiece = { id: 101, name: "Ofri" };

const seoncdPiece = { country: "Israel" };

const passport = { ...firstPiece, ...seoncdPiece };

console.log(passport);

// Nullish Coalescing Ex
let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];
employeesArr.forEach((e) => {
  e.id ?? console.log(e.name + " is missing id data");
  e.age ?? console.log(e.name + " is missing age data");
});
