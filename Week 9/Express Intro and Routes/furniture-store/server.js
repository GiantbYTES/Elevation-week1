const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/priceCheck/:name", (req, res) => {
  let name = req.params.name;
  let furniture = store.filter((f) => f.name === name);
  if (furniture[0].price) {
    res.send({ price: furniture[0].price });
  } else {
    res.send(`{price: null}`);
  }
});

app.get("/buy/:name", (req, res) => {
  let name = req.params.name;
  let furniture = {};
  store.map((f) => {
    if (f.name === name) {
      f.inventory--;
      furniture = f;
    }
  });
  if (furniture.inventory > -1) {
    res.send(furniture);
  } else {
    res.send("Furniture is sold out");
  }
});

app.get("/sale", (req, res) => {
  let params = req.query;
  if (params.admin)
    store.map((f) => {
      if (f.inventory > 10) {
        f.price = f.price * 0.5;
      }
    });
  res.send(store);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
