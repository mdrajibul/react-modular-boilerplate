/**
 * Webpack configuration for production.
 */
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const commonConfig = require('./common.config');

module.exports = {
  mode: 'production',
  entry: path.join(process.cwd(), 'src', 'index.ts'),
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
    filename: 'index.js',
    path: path.join(process.cwd(), 'dist')
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [...commonConfig.module.rules]
  },
  resolve: commonConfig.resolve,
  plugins: [
    ...commonConfig.plugins,
    new CopyPlugin([
      {
        from: './src/assets/',
        to: './dist/assets/'
      }
    ])
  ]
};
