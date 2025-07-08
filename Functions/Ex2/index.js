//Ex1
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getAge = function (str) {
  let toReturn = `${str} years old`;
  if (str > 55) {
    toReturn = "a 55+";
  } else if (str < 21) {
    toReturn = "an Underage";
  }
  return toReturn;
};

const capitalizeProfession = function (str) {
  let tmp = str.split(" ");
  tmp = tmp.map(capitalize);
  return tmp.join(" ");
};

const capitalizeCatchphrase = function (str) {
  let tmp = str.split(" ");
  tmp[0] = capitalize(tmp[0]);
  return tmp.join(" ");
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeProfession(person.profession); //call function for profession
  summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)}.`; //call function for country + city
  summary += ` ${capitalize(person.name)} loves to say "${capitalizeCatchphrase(
    person.catchphrase
  )}"`; //call function for catchphrase
  return summary;
};

for (const person of people_info) {
  console.log(getSummary(person));
}

//Ex2
const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const ignoreCase = function (arr) {
  //Convert all words to lowercase
  return arr.map((x) => x.toLowerCase());
};

const removeSpecialChar = function (specCharArr, str) {
  //Remove all special characters from a string
  specCharArr.forEach((chr) => {
    str = str.replaceAll(chr, "");
  });
  return str;
};

const wordCounter = function (arr) {
  arr.forEach((word) => {
    wordCounts[word] = wordCounts[word] ? wordCounts[word] + 1 : 1;
  });
};

let tmp = removeSpecialChar(specialChars, story);
let arr = tmp.split(" ");
arr = ignoreCase(arr);
wordCounter(arr);
console.log(wordCounts);
