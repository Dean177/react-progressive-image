var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.test.js');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, '/assets')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7777, '0.0.0.0', function(err) {
  if (err) { return console.log(err); }
  console.log('Listening on port 7777');
});
