const Sequelize = require("sequelize");

// Connect without specifying a database
const sequelize = new Sequelize("mysql://root:tvnVbgMI@localhost:3307/");

async function createDatabase() {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log("Connected to MySQL successfully.");

    // Create the database
    await sequelize.query("CREATE DATABASE IF NOT EXISTS sql_intro");
    console.log("Database 'sql_intro' created successfully!");

    // Also create sql_testing if you need it
    await sequelize.query("CREATE DATABASE IF NOT EXISTS sql_testing");
    console.log("Database 'sql_testing' created successfully!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await sequelize.close();
  }
}

createDatabase();
