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
});

describe("findWord", () => {
  test("should return true if word exist in the trie", () => {
    const result = new AutoCompleteTrie(null, {}, false);
    result.addWord("hi");
    expect(result.findWord("hi")).toBeTruthy();
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
});
