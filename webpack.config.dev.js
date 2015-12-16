var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  noInfo: true,
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'demo', 'index')
  ],
  output: {
      path: path.join(__dirname, 'demo', 'assets'),
      filename: 'index.js',
      publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('development') } }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [ { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, '..') } ]
  }
};
