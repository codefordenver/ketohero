var Server = require('../frontend-server.js');
var app = Server.app();


// If the node_env is NOT set to production, run the webpackdev server
// Uses the webpack.dev.config.js file for webpack configuration.
if (process.env.NODE_ENV !== 'production') {

	var webpack = require('webpack');
	var WebpackDevServer = require('webpack-dev-server');
	var config = require('../webpack.dev.config');

	new WebpackDevServer(webpack(config), {
	  publicPath: config.output.publicPath,
	  hot: true,
	  historyApiFallback: false
	}).listen(8080, '0.0.0.0', function (err, result) {
	  if (err) {
	    return console.log(err);
	  }

	  console.log('Frontend located at http://localhost:8080/client/');
	});
} 
// Otherwise, run a simple express server to serve up the frontend files.
else {
	app.listen(8080)
	console.log("Serving up the frontend at http://localhost:8080");
}