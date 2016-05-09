var config = require('../webConfig');

var configuration = {
	GetPort: function(){
		return config.port;
	},

	GetCrawlers: function(){
		return config.crawlers;
	}	
};

module.exports = configuration;