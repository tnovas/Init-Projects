var crawlers = require('../helpers/config').GetCrawlers();
var express = require('express');

routesConfig = function(app){
	app.use('/public', function(req, res){
		res.sendfile('./' + req.originalUrl);
	});

	app.get('/', function(req, res){
		if (req.headers['user-agent'].toLowerCase().match(crawlers)){
			return res.sendfile('./assets/views/crawlers/index.html');
		}

		res.sendfile('./assets/views/index.html');	
	});

	app.use('/*', function(req, res) {
		res.sendfile('./assets/views/shared/404.html', 404);
	});	

	app.use(function(err, req, res, next) {
	  	res.sendfile('./assets/views/shared/500.html', 500);
	});	
};

module.exports = routesConfig;