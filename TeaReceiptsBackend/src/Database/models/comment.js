const connection = require("../connection");

const createCommentTable = () => {
  const commentTable = `
    CREATE TABLE comments (
      id INT PRIMARY KEY AUTO_INCREMENT,
      post VARCHAR(50) NOT NULL,
      text VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  connection.query(commentTable, (err, results) => {
    if (err) {
      console.error("Error creating recipes table:", err);
    } else {
      console.log("Recipes table created successfully:", results);
    }
  });
};

module.exports = {
  createCommentTable,
};
