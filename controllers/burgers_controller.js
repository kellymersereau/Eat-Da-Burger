var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/burgers')
	});
});

router.delete('/burgers/delete/:burger_id', function(req, res){
	var condition = 'burger_id = ' + req.params.burger_id;

	console.log('condition ', condition);

	burgers.delete(condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;