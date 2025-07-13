import promptSync from "prompt-sync";
const prompt = promptSync();

let qAndA = [];

const answer1 = prompt(
  "Question 1: What is the only country in the world that doesn't have a capital city? "
);
qAndA.push({ answer: answer1, check: "Nauru" });
const answer2 = prompt(
  "Which element on the periodic table has the highest melting point?"
);
qAndA.push({ answer: answer2, check: "Tungsten" });
const answer3 = prompt("In what year was the first email ever sent?");
qAndA.push({ answer: answer3, check: "1971" });

let result = 0;

qAndA.forEach((a) => (a.answer === a.check ? result++ : result));

console.log("Final Score: " + result + "/3 correct!");
if (result === 3) {
  console.log("Wow, you're a genius!");
}
