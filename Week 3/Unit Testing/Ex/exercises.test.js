const { isEven, removeAtLeastOne, simplify, validate } = require("./exercises");

//Ex1

test("isEven should return true if n is even, false otherwise", () => {
  let result = isEven(40);
  expect(result).toBeTruthy();
});

test("isEven should return true if n is even, false otherwise", () => {
  let result = isEven(undefined);
  expect(result).toBeFalsy();
});

//Ex2

test("removeAtLeastOne should remove at least one element from an array", () => {
  const arr = [1, 2, 3, 4, 5];
  const arrLength = arr.length;
  const result = removeAtLeastOne(arr);
  expect(result.length).toBeLessThan(arrLength);
});

test("removeAtLeastOne should remove at least one element from an array", () => {
  const arr = [0];
  const result = removeAtLeastOne(arr);
  expect(result.length).toBe(0);
});

//Ex3

test('simplify should return a clean string without these symbols: "!", "#", ".", ",", "\'"', () => {
  const str = "Hello, World! This is a test string with symbols: #,.'";
  const expected = "Hello World This is a test string with symbols: ";
  expect(simplify(str)).toBe(expected);
});

test('simplify should return a clean string without these symbols: "!", "#", ".", ",", "\'"', () => {
  const str = "!#,.'";
  expect(simplify(str)).toBe("");
});

//Ex4
test("validate should return true if there is more true's than false's in an array of booleans", () => {
  const arr = [true, false, true, true, false];
  const result = validate(arr);
  expect(result).not.toEqual({ error: "Need at least one boolean" });
  expect(result).toBeTruthy();
});
test("validate should return false if there is more false's than true's in an array of booleans", () => {
  const arr = ["apple", "apple", false, false, false];
  const result = validate(arr);
  expect(result).toBeFalsy();
});
