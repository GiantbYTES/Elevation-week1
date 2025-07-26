export class AutoCompleteTrie {
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
    let words = [];
    let curLetter = this._getRemainingTree(prefix, this);
    if (!curLetter) {
      return [];
    }
    for (let n in curLetter.children) {
      this._allWordsHelper("", curLetter.children[n], words);
    }
    words = words.map((w) => {
      return prefix + w;
    });
    return words;
  }
  _getRemainingTree(prefix, node) {
    let curLetter = node;
    for (let l of prefix) {
      if (!curLetter.children[l]) {
        return false;
      } else {
        curLetter = curLetter.children[l];
      }
    }
    return curLetter;
  }
  _allWordsHelper(prefix, node, allWords) {
    // Helper function to return all words in the trie but with the prefix it was given and null before it
    // For example: if the prefix is "h" and the word is "hi", it will return "hnullhi"
    if (!node.children && node.endOfWord) {
      const newWord = prefix + node.value;
      return allWords.push(newWord);
    } else if (node.children && node.endOfWord) {
      const newWord = prefix + node.value;
      allWords.push(newWord);
      for (let n in node.children) {
        node._allWordsHelper(newWord, node.children[n], allWords);
      }
    } else {
      for (let n in node.children) {
        const newWord = prefix + node.value;
        node._allWordsHelper(newWord, node.children[n], allWords);
      }
    }
  }
}

export default AutoCompleteTrie;
