//Ex1

//should return true if n is even, false otherwise
function isEven(n) {
  return n % 2 == 0 ? true : false;
}

//Ex2

//should remove at least one element from the array `arr`
function removeAtLeastOne(arr) {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
}

//Ex3

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
function simplify(str) {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
}

//Ex4
//should return true if there is more true's than false's in arr
function validate(arr) {
  let counter = 0;
  let isValidArr = false;
  arr.forEach((b) => {
    if (typeof b === "boolean") {
      isValidArr = true;
    }
    if (b === true) {
      counter++;
    }
    if (b === false) {
      counter--;
    }
  });
  if (!isValidArr) {
    return { error: "Need at least one boolean" };
  }
  if (counter > 0) {
    return true;
  }
  return false;
}

module.exports = { isEven, removeAtLeastOne, simplify, validate };
