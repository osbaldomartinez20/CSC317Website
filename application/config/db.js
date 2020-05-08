const mysql = require('mysql');

//for my local server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gatorimage",
  multipleStatements: true
});

//for my amazon server
const conn = mysql.createConnection({
  host: "csc317database.cioa4ik5rcbw.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "xenoblade2010",
  database: "csc317_database",
  multipleStatements: true
});

module.exports = conn;