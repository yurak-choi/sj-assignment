
var express = require('express');
var router = express.Router();

var db_info = require('../config/db_info');
var conn = db_info.init();

db_info.open(conn);

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/image', function(req, res) {
	res.render('image');
});

router.post('/image', function(req, res) {
	var name = req.body.name;
	var content_base64 = req.body.content_base64;
	var size = req.body.size;
	
	var sql = 'INSERT INTO images(name, content_base64, size) VALUES (?, ?, ?)'; // 클럽목록
	conn.query(sql, [name, content_base64, size], function(err, result){
		if(err) {
			return res.status(404).json({error : err});
		} else {
			if(result.affectedRows > 0) {
				var id = result.insertId;
				return res.status(201).json({id : id});
			} else {
				return res.status(400).json({error : 'insert fail'});
			}
		}
	});
});

module.exports = router;