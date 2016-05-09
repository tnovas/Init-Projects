var express = require('express');
var app = express();
var config = require('./helpers/config');
var routesConfig = require('./middleware/routesConfig');
var homeController = require('./controllers/homeController');

homeController(app);

routesConfig(app);

app.listen(config.GetPort());