const AutoCompleteTrie = require("./index.cjs");
const ui = require("./ui");

const nTrie = new AutoCompleteTrie("", {}, false);

function handleChoice(choise, arg = null) {
  switch (choise) {
    case "add":
      arg = arg.toLowerCase();
      nTrie.addWord(arg);
      ui.handleAdd(arg);
      break;
    case "find":
      arg = arg.toLowerCase();
      const found = nTrie.findWord(arg);
      ui.handleFind(arg, found);
      break;
    case "complete":
      arg = arg.toLowerCase();
      const words = nTrie.predictWords(arg);
      ui.handleComplete(arg, words);
      break;
    case "help":
      ui.handleHelp();
      break;
    case "exit":
      ui.handleExit();
      break;
    default:
      throw new Error("Invalid choice. Please try again.");
  }
}

function run() {
  ui.displayTitle();
  let choice;
  while (choice !== "exit") {
    let input = ui.getChoice();
    let args = input.split(" ");
    choice = args[0];
    try {
      handleChoice(choice, args[1]);
    } catch (err) {
      console.log(err.message);
    }
  }
}

run();
