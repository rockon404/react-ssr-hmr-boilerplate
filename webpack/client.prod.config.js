const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const rootDir = path.resolve(__dirname, '../');

module.exports = merge(baseConfig, {
  context: path.resolve(rootDir, 'app'),
  entry: './client',

  plugins: [
    new WebpackCleanupPlugin({
      quiet: true,
      exclude: ['assets.json'],
    }),

    new UglifyJsPlugin({
      sourceMap: false,
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(rootDir, 'public'),
      prettyPrint: true,
    }),
  ],

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
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[1][name].[hash:6].[ext]',
            regExp: path.resolve(rootDir, 'assets/(.*/)'),
          },
        },
      },
    ],
  },

  output: {
    path: path.resolve(rootDir, 'public'),
    filename: 'js/[name].[chunkhash].js',
  },
});
