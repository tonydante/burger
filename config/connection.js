//CREATE THE MySQL CONNECTION AND EXPORT FOR THE DATABASE BY THE ORM 

var mysql = require('mysql');
var connection;



// if (process.env.NODE_ENV === 'production') {
	// connection = mysql.createConnection('mysql://b0c03ec69ba048:7a21ef4a@us-cdbr-iron-east-03.cleardb.net/heroku_5f6e099bfb663a7?reconnect=true');
// } else {
//  	connection = mysql.createConnection({
// 		host: "localhost",
// 		//port: 3306,
// 		user: "root",
// 		password: "",
// 		database: "burger2_db"
// 	});
// };

connection.connect(function(err) {
    if (err) {
    	console.error('error connecting: ' + err.stack);
    	return;
    } 
    console.log("connected as id " + connection.threadId);
});

module.exports= connection;
