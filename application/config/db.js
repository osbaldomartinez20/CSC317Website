const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gatorimage",
  multipleStatements: true
});

module.exports = connection;