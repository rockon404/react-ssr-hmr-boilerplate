const webpack = require('webpack');
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const rootDir = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    alias: {
      'app-common': path.resolve(rootDir, 'app/common/'),
      'app-components': path.resolve(rootDir, 'app/common/components'),
      'app-features': path.resolve(rootDir, 'app/features'),
      public: path.resolve(rootDir, 'public'),
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'BUILD_TARGET']),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
  ],
};
