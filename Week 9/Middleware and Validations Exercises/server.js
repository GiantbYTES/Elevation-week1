const express = require("express");
const path = require("path");
const { logger } = require("./middlewares/logging.js");
const { requestCounter } = require("./middlewares/requestCounter.js");
const { idValidation } = require("./middlewares/validateId.js");
const postRouter = require("./routes/postRouter.js");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(logger);
app.use(requestCounter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/posts", postRouter);

const wordCounter = { yes: 2 };
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const checkResourceExists = require("./middlewares/checkResourceExists")(users);
let idCounter = 2;
app.get("/", (req, res) => {
  res.json({ message: "Welcome!", requestCount: req.requestCount });
});

app.get("/about", (req, res) => {
  res.json({ message: "about", requestCount: req.requestCount });
});

app.get("/users", (req, res) => {
  res.send(JSON.stringify(users));
});

app.get("/users/:id", idValidation, checkResourceExists, (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.json(user);
});

app.post("/users", (req, res) => {
  idCounter++;
  const name = req.body.name;
  users.push({ id: idCounter, name: name });
  res.send(`user named ${name} was created`);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
