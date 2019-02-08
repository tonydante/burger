var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database: "burger_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE burger2_db", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = `CREATE TABLE Burgers (
//         id INT AUTO_INCREMENT NOT NULL,
//         name VARCHAR(255) NOT NULL,
//         devoured TINYINT(1) DEFAULT '0',
//         date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
//         PRIMARY KEY (id)
//         ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO Burgers (id, name, devoured, date) VALUES ?";
//     var values = [
//         [1, 'Regular Hamburger', 1, '2016-10-02 10:51:12'],
//         [2, 'Cheese Burger', 1, '2016-10-02 10:52:15'],
//         [3, 'Ultra Bacon Burger', 0, '2016-10-02 10:53:12'],
//         [4, 'Veggie Burger', 0, '2016-10-02 10:54:22'],
//         [5, 'Chicken Club Burger', 0, '2016-10-02 10:55:24']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });