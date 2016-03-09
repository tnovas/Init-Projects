var express = require('express');
var app = express();
var config = require('./helpers/config');
var routesConfig = require('./middleware/routesConfig');

routesConfig(app);

app.listen(config.GetPort());