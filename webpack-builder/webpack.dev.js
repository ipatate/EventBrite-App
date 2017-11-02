const webpack = require('webpack'); //eslint-disable-line
const commonPath = require('./common-paths');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack-hot-middleware/client', commonPath.entry],
  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
