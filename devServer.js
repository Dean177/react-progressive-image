var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev.js');
var app = express();
var compiler = webpack(config);

//process.env.NODE_ENV = JSON.stringify('production');

if (process.env.NODE_ENV === JSON.stringify('production')) {
  app.use(require('compression')());
  console.log('Running in demo mode');
} else {
  app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(require('webpack-hot-middleware')(compiler));
  console.log('Running in dev mode');
}
app.use('/assets', express.static(path.join(__dirname, 'demo', 'assets')));

app.get('/', function(req, res) { res.sendFile(path.join(__dirname, 'demo','index.html')); });

app.listen(7777, '0.0.0.0', function(err) {
  if (err) { return console.log(err); }
  console.log('Listening on port 7777');
});
