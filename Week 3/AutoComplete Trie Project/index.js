class AutoCompleteTrie {
  constructor(value, children, endOfWord) {
    this.value = value;
    this.children = children;
    this.endOfWord = endOfWord;
  }
  addWord(word) {
    let index = 0;
    const arr = word.split("");
    while (this.children[arr[index]]) {
      this.children = this.children.children;
      index++;
    }
    while (index < arr.length) {
      this.children = arr[i];
      index++;
    }
    this.endOfWord = true;
  }
  findWord(word) {
    return true;
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

const nTree = new AutoCompleteTrie();
nTree.addWord("hi");
console.log("tree:" + nTree);
