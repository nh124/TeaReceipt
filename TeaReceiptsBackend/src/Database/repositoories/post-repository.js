const connection = require("../connection");

class postRepository {
  createPost(data) {
    const insertPostQuery = `
            INSERT INTO posts (user_id, name, phone_number, city, caption)
                VALUES (?, ?, ?, ?, ?)
            `;
    connection.query(
      insertPostQuery,
      [data.user_id, data.name, data.phone_number, data.city, data.caption],
      (err, result) => {
        if (err) {
          console.error("Error inserting data into users table:", err);
        } else {
          console.log("Data inserted into users table:", result);
        }
      }
    );
  }

  getPosts() {
    const getPostQuery = `
        select * from posts
    `;
    return new Promise((resolve, reject) => {
      connection.query(getPostQuery, (err, results) => {
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
  postRepository,
};
