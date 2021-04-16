const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "TSFCWebApp",
  database: "gatorimage",
  multipleStatements: true
});

module.exports = connection;