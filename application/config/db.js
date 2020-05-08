const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gatorimage",
  multipleStatements: true
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "xenoblade2010",
  database: "csc317_database",
  multipleStatements: true
});

module.exports = connection;