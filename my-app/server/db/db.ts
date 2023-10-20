const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME1,
  password: process.env.PASSWORD,
  database: process.env.SIGNUPDB,
});

connection.connect((err: Error) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db-mysql 연결성공");
  }
});

module.exports = connection;
