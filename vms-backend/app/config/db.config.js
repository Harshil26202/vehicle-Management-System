var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "harshil",
  password: "rootroot",
});

con.connect(function (err) {
  if (err) throw err;
  // console.log(err.code + "*******")
  console.log("DB is Connected!");

  sql = "USE VMS;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("result:", result);
  });
});

con.on("error", function (err) {
  console.log(err.code + "***"); // 'ER_BAD_DB_ERROR'
});

module.exports = con;
