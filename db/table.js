var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE burgers (burger_name VARCHAR(255), devoured BOOLEAN DEFAULT false, PRIMARY KEY id)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
