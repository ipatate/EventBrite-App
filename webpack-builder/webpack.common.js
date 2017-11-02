const HtmlWebpackPlugin = require('html-webpack-plugin'); //eslint-disable-line

const webpack = require('webpack'); // eslint-disable-line
const commonPath = require('./common-paths');

const config = {
  output: {
    filename: 'bundle.js',
    path: commonPath.outputPath,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/../src/index.html`,
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      $: 'jquery',
      jQuery: 'jquery',
      // uncomment used components, don't forget uncomment components in assets/js/boostrap.js file
      // Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
      // Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      // Button: 'exports-loader?Button!bootstrap/js/dist/button',
      // Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      // Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      // Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      // Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      // Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      // Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      // Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      // Util: 'exports-loader?Util!bootstrap/js/dist/util',
    }),
  ],
};

module.exports = config;
