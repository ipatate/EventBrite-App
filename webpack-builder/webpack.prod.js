const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
const PreloadWebpackPlugin = require('preload-webpack-plugin'); //eslint-disable-line
const webpack = require('webpack'); //eslint-disable-line
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const commonPath = require('./common-paths');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //eslint-disable-line

module.exports = {
  devtool: 'source-map',
  entry: [commonPath.entry],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'all',
    }),
    new ExtractTextWebpackPlugin('app.css'),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'), // eslint-disable-line
      // cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
