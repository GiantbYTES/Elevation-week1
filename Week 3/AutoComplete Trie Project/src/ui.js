const prompt = require("prompt-sync")();

function displayTitle() {
  console.log("=== AutoComplete Trie Console ===");
  console.log("Type 'help' for commands");
}
function displayPrompt() {
  console.log(">");
}
function getChoice() {
  const choice = prompt("> ");
  return choice;
}
function handleAdd(word) {
  console.log(`✓ Added '${word}' to dictionary\n`);
}
function handleFind(word, found) {
  if (found) {
    console.log(`✓ '${word}' exists in dictionary\n`);
  } else {
    console.log(`✗ '${word}' not found in dictionary\n`);
  }
}
function handleComplete(word, words) {
  const toPrint = words.join(", ");
  console.log(`Suggestions for '${word}': ${toPrint}\n`);
}
function handleHelp() {
  console.log(
    "Commands:\n  add <word>      - Add word to dictionary\n  find <word>     - Check if word exists\n  complete <prefix> - Get completions\n  help           - Show this message\n  exit           - Quit program\n"
  );
}
function handleExit() {
  console.log("Goodbye!");
}
module.exports = {
  displayTitle,
  displayPrompt,
  getChoice,
  handleAdd,
  handleFind,
  handleComplete,
  handleHelp,
  handleExit,
};
