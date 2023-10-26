const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
// const bluebird = require("bluebird");
dotenv.config();
// mysql2는 되고 mysql2/promise는 안되고
let connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME1,
  password: process.env.PASSWORD,
  database: process.env.SIGNUPDB,
});

// const connection = await mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USERNAME1,
//   password: process.env.PASSWORD,
//   database: process.env.SIGNUPDB,
//   Promise: bluebird,
// });

module.exports = connection;
export {};
