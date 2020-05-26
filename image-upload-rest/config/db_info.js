
var mysql = require('mysql');

var datasource = {
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: '1234',
	database: 'testdb', 
};

var connection = {
	init : function(){
		return mysql.createConnection(datasource);
	},
	
	open : function(con){
		con.connect(function(err){
			if(err){
				console.error("mysql connection error : " + err);
			}else{
				console.info("mysql connection successfully.");
			}
		});
	}
};

module.exports = connection;