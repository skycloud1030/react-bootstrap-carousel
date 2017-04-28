var path = require('path');
var webpack = require('webpack');
var node_modules_dir = __dirname + '/node_modules';

var min= process.argv.indexOf("--min")===-1?false:true;
var plugins=[];
if(min){
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
}




var config = {
    entry: {
      "react-bootstrap-carousel":path.resolve(__dirname, 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: "ReactBootstrap_Carousel",
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      'react': 'react',
      'react-dom': 'react-dom'
    },
    plugins: plugins,
    resolve: { alias: {} },
    module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              cacheDirectory:true,
              presets: ['es2015', 'stage-0', 'react'],
            }
          },
        ]
    }
};
module.exports = config;
