const bcrypt = require("bcrypt");
const connection = require("../connection");

class authRepo {
  createUser(data) {
    function generateUserName() {
      const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
      return `user ${randomFourDigitNumber}`;
    }
    function hashPassword(password) {
      const saltRounds = 10;
      return bcrypt.hashSync(password, saltRounds);
    }

    const insertQuery = `
        INSERT INTO users (name, email, username, password)
            VALUES (?, ?, ?, ?)
        `;
    connection.query(
      insertQuery,
      [data.name, data.email, generateUserName(), hashPassword(data.password)],
      (err, result) => {
        if (err) {
          console.error("Error inserting data into users table:", err);
        } else {
          console.log("Data inserted into users table:", result);
        }
      }
    );
  }

  searchUser(data) {
    const searchQuery = `
      SELECT * FROM users WHERE email = ?`;
    return new Promise((resolve, reject) => {
      connection.query(searchQuery, [data], (err, results) => {
        if (err) {
          console.error("Error executing search query:", err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = {
  authRepo,
};
