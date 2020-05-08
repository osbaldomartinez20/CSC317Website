const mysql = require('mysql');

//for my local server
const con = mysql.createConnection({
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

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id VARCHAR(36) PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255));CREATE TABLE posts (pid VARCHAR(36) PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), userid VARCHAR(36), filename VARCHAR(255), date TIMESTAMP, user VARCHAR(255))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables created");
  });
});