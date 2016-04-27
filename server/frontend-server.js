var path = require('path');
var express = require('express')

module.exports = {
	app: function() {
		var app = express();
		var indexPath = path.join(__dirname, '../dist/index.html');
		var publicPath = express.static(path.join(__dirname, '../dist/public'));

		app.use('/public', publicPath);
		app.get('/', function (_, res) { res.sendFile(indexPath) });

		return app;
	}
}