const mysql = require("mysql");
const { HOST, USER, PASSWORD, DATABASE } = require("../config");

console.log(process.env.HOST);
const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = connection;
