const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:tvnVbgMI@localhost:3307/sql_testing"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
// sequelize.query("SELECT * FROM company").then(function ([results, metadata]) {
//   console.log(results);
// });
// sequelize.query("SELECT * FROM company").then(function ([results, metadata]) {
//   results.forEach((c) => console.log(c.name));
// });
// sequelize
//   .query("INSERT INTO company VALUES(null, 'Google', 'Tech', 10000)")
//   .then(function ([result]) {
//     console.log(result);
//   });

function addStudent(name, brilliant) {
  sequelize
    .query(`INSERT INTO student VALUES(null, '${name}', ${brilliant})`)
    .then(function ([result]) {
      console.log(result);
    });
}

function addTeacher(name, tenured) {
  sequelize
    .query(`INSERT INTO teacher VALUES(null, '${name}', ${tenured})`)
    .then(function ([result]) {
      console.log(result);
    });
}
addStudent("Leonidis", 1);
addTeacher("Yoda", 0);

sequelize.query("SELECT * FROM student").then(function ([results, metadata]) {
  results.forEach((s) => {
    console.log(s.name);
    console.log(s.brilliant);
  });
});

sequelize.query("SELECT * FROM teacher").then(function ([results, metadata]) {
  results.forEach((t) => {
    console.log(t.name);
    console.log(t.tenured);
  });
});
