var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "taya-db",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Database Connected..");
});

module.exports = con;
