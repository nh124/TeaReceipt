const connection = require("../connection");

const createPostTable = () => {
  const postTable = `
    CREATE TABLE posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      email VARCHAR(50) NOT NULL,
      text VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  connection.query(postTable, (err, results) => {
    if (err) {
      console.error("Error creating recipes table:", err);
    } else {
      console.log("Recipes table created successfully:", results);
    }
  });
};

module.exports = {
  createPostTable,
};
