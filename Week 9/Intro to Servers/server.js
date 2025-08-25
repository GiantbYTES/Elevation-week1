//Ex1

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   if (req.url === "/") {
//     res.write("Welcome to my server!");
//   } else if (req.url === "/about") {
//     res.write("This is the about page");
//   } else if (req.url === "/contact") {
//     res.write(
//       JSON.stringify({
//         name: "Your Name",
//         email: "your.email@example.com",
//         phone: "+1234567890",
//       })
//     );
//   } else {
//     res.statusCode = 404;
//     res.write("404 - Page not found");
//   }
//   res.end();
// });

// const port = 3000;
// server.listen(port, function () {
//   console.log(`Node server created at port ${port}`);
// });

//Ex2

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const http = require("http");

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/api/users") {
    if (req.method === "GET") {
      res.write(JSON.stringify(users));
    } else if (req.method === "POST") {
      const newUser = await readBody(req);
      if (newUser) {
        newUser.id = users[users.length - 1].id + 1;
        users.push(newUser);
        res.write(JSON.stringify(newUser));
      }
    }
  } else if (req.url.match(/^\/api\/users\/\d+$/) && req.method === "GET") {
    const id = parseInt(req.url.split("/").pop());
    const user = users.find((u) => u.id === id);
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ error: "User not found" }));
    }
  } else {
    res.statusCode = 404;
    res.write("404 - Page not found");
  }
  res.end();
});

const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}
