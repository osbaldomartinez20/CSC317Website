const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "gatorimage",
    multipleStatements: true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users (id VARCHAR(36) PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255));CREATE TABLE posts (pid VARCHAR(36) PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), user VARCHAR(255), filename VARCHAR(255), date TIMESTAMP)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Tables created");
    });
  });