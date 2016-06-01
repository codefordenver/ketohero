var webpack = require('webpack');
var devConfig = require('../webpack.dev.config.js');
var path = require('path');

// If the node_env is NOT set to production, run the webpackdev server
// Uses the webpack.dev.config.js file for webpack configuration.
if (process.env.NODE_ENV !== 'production') {

  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(devConfig), {
    contentBase: path.resolve(__dirname, '../../client'),
    publicPath: devConfig.output.publicPath,
    hot: true,
    historyApiFallback: false,
    proxy: {
      '/api/*': {
        target: 'http://0.0.0.0:3000'
      }
    }
  }).listen(8080, '0.0.0.0', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Frontend located at http://localhost:8080/');
  });
}
