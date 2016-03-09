var config = require('../config');

var configuration = {
	GetPort: function(){
		return config.port;
	},

	GetCrawlers: function(){
		return config.crawlers;
	}	
};

module.exports = configuration;