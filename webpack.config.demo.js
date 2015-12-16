var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  noInfo: true,
  entry: [ path.join(__dirname, 'demo', 'index') ],
  output: {
      path: path.join(__dirname, 'demo', 'assets'),
      filename: 'index.js',
      publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } })
  ],
  module: {
    loaders: [ { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, '..') } ]
  }
};
