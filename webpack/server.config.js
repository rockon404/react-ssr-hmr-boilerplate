const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const baseConfig = require('./base.config.js');

const rootDir = path.resolve(__dirname, '../');

module.exports = merge(baseConfig, {
  entry: ['babel-polyfill', 'webpack/hot/poll?1000', './server'],

  watch: true,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.join(rootDir, '.build'),
    filename: 'server.js',
  },
});
