const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  entry: {
    'react-bootstrap-carousel': path.resolve(__dirname, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ReactBootstrap_Carousel',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },
  plugins: [new CopyWebpackPlugin({ patterns: [{ from: 'app/assert', to: './' }] })],
  resolve: { alias: {} },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options:{
            cacheDirectory: true
          }
        }
      },
    ],
  },
};
module.exports = config;
