var orm = require('../config/orm.js');

var burgers = {
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb){
		orm.delete('burgers', condition, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;