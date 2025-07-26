const AutoCompleteTrie = require("./index");

describe("addWord", () => {
  test("should add a word to the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    console.log(result.children["h"]);
    expect(result.children["h"]).toBeInstanceOf(AutoCompleteTrie);
    expect(result.children["h"].endOfWord).toBe(false);
    expect(result.children["h"].children["i"]).toBeInstanceOf(AutoCompleteTrie);
    expect(result.children["h"].children["i"].endOfWord).toBe(true);
  });
  test("should add multiple words to the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result.children["h"].children["i"].endOfWord).toBe(true);

    expect(Object.keys(result.children["h"].children).length).toBe(2);
  });
  test("should not add a word that already exists in the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hi");
    expect(Object.keys(result.children["h"].children).length).toBe(1);
  });
});

describe("findWord", () => {
  test("should return true if word exist in the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    expect(result.findWord("hi")).toBeTruthy();
  });
  test("should return false if word does not exist in the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    expect(result.findWord("hello")).toBeFalsy();
  });
  test("should return false if the prefix does not match any word", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    expect(result.findWord("h")).toBeFalsy();
  });
});

describe("findWord", () => {
  test("should return true if word exist in the trie and false if not", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result.findWord("hi")).toBeTruthy();
    expect(result.findWord("hello")).toBeTruthy();
    expect(result.findWord("hey")).toBeFalsy();
  });
  test("should return false if the prefix does not match any word", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result.findWord("h")).toBeFalsy();
  });
  test("should return false if the word is an empty string", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    expect(result.findWord("")).toBeFalsy();
  });
});

describe("predictWords", () => {
  test("should return all words that start with a given prefix", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    result.addWord("hey");
    expect(result.predictWords("h")).toEqual(["hi", "hello", "hey"]);
  });

  test("should return an empty array if no words match the prefix", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result.predictWords("x")).toEqual([]);
  });
  test("should return an empty array if the prefix is an empty string", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result.predictWords("")).toEqual(["hi", "hello"]);
  });
});

describe("_getRemainingTree", () => {
  test("should return the remaining tree for a given prefix", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result._getRemainingTree("h", result)).toBeInstanceOf(
      AutoCompleteTrie
    );
  });
  test("should return the remaining tree for a given prefix that matches a word", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    expect(result._getRemainingTree("he", result)).toBeInstanceOf(
      AutoCompleteTrie
    );
  });

  test("should return false if the prefix does not match any word", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    expect(result._getRemainingTree("x", result)).toBeFalsy();
  });
});

describe("_allWordsHelper", () => {
  test("Should return the words that start with the given prefix, followed by null, and then the prefix itself as a word.", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    result.addWord("hey");
    const words = [];
    result._allWordsHelper("", result, words);
    expect(words).toEqual(["nullhi", "nullhello", "nullhey"]);
  });
  test("should return an empty array if there are no words in the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    const words = [];
    result._allWordsHelper("", result, words);
    expect(words).toEqual([]);
  });
  test("Should return the words that start with the given prefix, followed by null, and then the prefix itself as a word.", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    result.addWord("hello");
    result.addWord("hey");
    const words = [];
    result._allWordsHelper("h", result, words);
    expect(words).toEqual(["hnullhi", "hnullhello", "hnullhey"]);
  });
});
