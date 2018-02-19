const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');

module.exports = merge(baseConfig, {
  context: path.resolve(rootDir, 'app'),
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client',
  ],

  devtool: 'source-map',

  plugins: [new webpack.NamedModulesPlugin()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(rootDir, 'app'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: [
      {
        path: '**',
        target: 'http://localhost:3000',
      },
    ],
  },
  output: {
    path: path.resolve(rootDir, '.build'),
    publicPath: 'http://localhost:3001/',
    filename: 'client.js',
  },
});
