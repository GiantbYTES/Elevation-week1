const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const wordCounter = { yes: 2 };

app.get("/sanity", (req, res) => {
  console.log("sanity");
  res.send("Server is up and running");
});

app.get("/word/:word", (req, res) => {
  const word = req.params.word;
  if (wordCounter[word]) {
    res.send({ count: wordCounter[word] });
  } else {
    res.send({ count: 0 });
  }
});

app.post("/word/:word", (req, res) => {
  const word = req.params.word;
  if (wordCounter[word]) {
    wordCounter[word]++;
    res.send({ text: `Added '${word}'`, currentCount: wordCounter[word] });
  } else {
    wordCounter[word] = 1;
    res.send({ text: `Added '${word}'`, currentCount: wordCounter[word] });
  }
});

app.post("/sentence/:sentence", (req, res) => {
  const sentence = req.params.sentence;
  const sentenceArr = sentence.split(" ");
  let numNewWords = 0;
  const numOldWords = Object.keys(wordCounter).length;
  sentenceArr.forEach((word) => {
    if (wordCounter[word]) {
      wordCounter[word]++;
    } else {
      wordCounter[word] = 1;
      numNewWords++;
    }
  });
  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

app.delete("/word/:word", (req, res) => {
  const word = req.params.word;
  if (wordCounter[word]) {
    delete wordCounter[word];
    res.send({ text: `Deleted '${word}'` });
  } else {
    res.status(400).send({ text: `'${word}' doesn't exist` });
  }
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
