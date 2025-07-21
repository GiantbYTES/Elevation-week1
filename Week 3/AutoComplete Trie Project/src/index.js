class AutoCompleteTrie {
  constructor(value, children, endOfWord) {
    this.value = value;
    this.children = children;
    this.endOfWord = endOfWord;
  }
  addWord(word) {
    let curLetter = this;
    for (let l of word) {
      if (!curLetter.children[l]) {
        curLetter.children[l] = new AutoCompleteTrie(l, {}, false);
      }
      curLetter = curLetter.children[l];
    }
    curLetter.endOfWord = true;
  }
  findWord(word) {
    let curLetter = this;
    for (let l of word) {
      if (!curLetter.children[l]) {
        return false;
      } else {
        curLetter = curLetter.children[l];
      }
    }
    if (curLetter.endOfWord) {
      return true;
    }
  }
  predictWords(prefix) {
    return true;
  }
  _getRemainingTree(prefix, node) {
    return true;
  }
  _allWordsHelper(prefix, node, allWords) {
    return true;
  }
}

const nTree = new AutoCompleteTrie(null, {}, false);
nTree.addWord("hi");
nTree.addWord("hello");

console.log(nTree.children);
console.log(nTree.findWord("hi"));

module.exports = AutoCompleteTrie;
