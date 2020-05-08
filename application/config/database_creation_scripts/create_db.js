const mysql = require('mysql');

//for my local server
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  multipleStatements: true
});

//for my amazon server
const conn = mysql.createConnection({
  host: "csc317database.cioa4ik5rcbw.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "xenoblade2010",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  conn.query("CREATE DATABASE csc317_database", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});