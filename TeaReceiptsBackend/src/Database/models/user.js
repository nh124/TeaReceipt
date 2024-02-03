const connection = require("../connection");

const createUserTable = () => {
  const userTable = `
    CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL UNIQUE,
      username VARCHAR(50) NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  connection.query(userTable, (err, results) => {
    if (err) {
      console.error("Error creating recipes table:", err);
    } else {
      console.log("Recipes table created successfully:", results);
    }
  });
};

module.exports = {
  createUserTable,
};
