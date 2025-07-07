//Ex1
let p1 = { name: "Robert", age: 30, city: "New York" };
let p2 = { name: "Jill", age: 30, city: "Los Angeles" };

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log(`${p2.name} wanted to date ${p1.name}.`);
  } else {
    console.log(`${p2.name} wanted to date ${p1.name}, but couldn't.`);
  }
}

//Ex2
let library = {
  books: [
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
  ],
};

//Ex3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
const fName = "dAn";
let resName = fName;
resName = resName.charAt(0).toUpperCase() + resName.slice(1).toLowerCase();

if (reservations[resName]) {
  if (reservations[resName].claimed) {
    console.log("Hmm, someone already claimed this reservation");
  } else {
    console.log(`Welcome, ${resName}`);
  }
} else {
  reservations[resName] = { claimed: true };
  console.log("You have no reservation, I'll add one for you");
}
console.log(reservations);

//Ex4
const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose one
  fridge: {
    price: 500,
    works: false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const fridgeItems = kitchen.fridge.items;
const owner = kitchen.owner;
const fridgePrice = kitchen.fridge.price;
const pluralDays = date - fridgeItems[1].expiryDate > 1 ? "days" : "day";

if (hasOven) {
  if (fridgeWorks) {
    console.log(
      ` ${kitchen.owner}'s ${fridgeItems[1].name} expired ${
        3 - fridgeItems[1].expiryDate
      } ${pluralDays} ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${
        fridgeItems[1].name
      } in.`
    );
  } else {
    console.log(
      ` ${kitchen.owner}'s ${fridgeItems[1].name} expired ${
        3 - fridgeItems[1].expiryDate
      } ${pluralDays} ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${
        fridgeItems[1].name
      } in. and she'll have to pay ${fridgePrice / 2} to fix the fridge.`
    );
  }
} else {
  if (fridgeWorks) {
    console.log(
      ` ${kitchen.owner}'s ${fridgeItems[1].name} expired ${
        3 - fridgeItems[1].expiryDate
      } ${pluralDays} ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${
        fridgeItems[1].name
      } in.`
    );
  } else {
    console.log(
      ` ${kitchen.owner}'s ${fridgeItems[1].name} expired ${
        3 - fridgeItems[1].expiryDate
      } ${pluralDays} ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${
        fridgeItems[1].name
      } in. And she'll have to pay ${fridgePrice / 2} to fix the fridge.`
    );
  }
}

let x = [{ human: { name: "Daena", age: 31 } }][0].age;
console.log(x);
