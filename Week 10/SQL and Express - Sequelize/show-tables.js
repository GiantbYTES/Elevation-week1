const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://root:tvnVbgMI@localhost:3307/sql_intro"
);

async function showTables() {
  try {
    await sequelize.authenticate();
    console.log("Connected successfully!");

    // Show all tables in the database
    const [results] = await sequelize.query("SHOW TABLES");
    console.log("Tables in sql_intro database:");
    console.log(results);

    // Also show databases
    const [databases] = await sequelize.query("SHOW DATABASES");
    console.log("\nAll databases:");
    console.log(databases);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

showTables();
