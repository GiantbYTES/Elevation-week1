import AutoCompleteTrie from "./index.js";

const nTrie = new AutoCompleteTrie("", {}, false);

let words = 0;
function addNewWord() {
  if (document.getElementById("feedbackContainer").lastElementChild) {
    document.getElementById("feedbackContainer").lastElementChild.remove();
  }
  const newWord = document.getElementById("wordInput");
  if (newWord.value === "") {
    const newFeedback = document.createElement("div");
    newFeedback.setAttribute("class", "error-feedback");
    document.getElementById("feedbackContainer").appendChild(newFeedback);
    newFeedback.innerHTML = `✗ Cannot add empty word`;
    newWord.value = "";
  } else if (nTrie.findWord(newWord.value)) {
    const newFeedback = document.createElement("div");
    newFeedback.setAttribute("class", "error-feedback");
    document.getElementById("feedbackContainer").appendChild(newFeedback);
    newFeedback.innerHTML = `✗ '${newWord.value}' already exists in dictionary`;
    newWord.value = "";
  } else {
    nTrie.addWord(newWord.value);
    words++;
    const numWords = document.getElementById("numOfWords");
    numWords.innerHTML = words;
    const newFeedback = document.createElement("div");
    newFeedback.setAttribute("class", "feedback");
    document.getElementById("feedbackContainer").appendChild(newFeedback);
    newFeedback.innerHTML = `✓ Added '${newWord.value}' to dictionary`;
    newWord.value = "";
  }
}
function suggestWords() {
  const mainContainer = document.getElementById("suggestionsContainer");
  const textInput = document.getElementById("typingInput");
  if (mainContainer.lastElementChild) {
    mainContainer.lastElementChild.remove();
  }
  if (textInput.value.trim() === "") {
    mainContainer.classList.add("hidden");
    return;
  }
  const words = nTrie.predictWords(textInput.value);
  console.log(words);
  const wordsContainer = document.createElement("div");
  wordsContainer.setAttribute("class", "word-container");

  mainContainer.appendChild(wordsContainer);
  mainContainer.removeAttribute("class", "hidden");
  words.forEach((w) => {
    const sugWord = document.createElement("div");
    sugWord.innerHTML = w;
    sugWord.setAttribute("class", "suggestion-word");
    wordsContainer.appendChild(sugWord);
  });
}

window.addNewWord = addNewWord;
window.suggestWords = suggestWords;
