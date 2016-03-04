var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
  plugins: [commonsPlugin,new ExtractTextPlugin('style.css', { allChunks: true })],
  entry: {
    index:['./src/js/index/index.js'],
    nav:['./src/js/nav/nav.js'],
    enter:['./src/js/entry.js']
  },
  output: {
    path: path.resolve('./assets/js'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015','react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple')
  ],
}
