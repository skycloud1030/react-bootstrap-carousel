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
      "demo":path.resolve(__dirname, 'app/demo.jsx'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    plugins: plugins,
    module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'stage-0', 'react'],
            }
          },
          {
            test: /\.css$/,
            // exclude: /(node_modules|bower_components)/,
            loader: "style-loader!css-loader"
          },
          { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
          { test: /\.(png|jpg|gif)$/,loader: 'url-loader?name=[path][name].[ext]&limit=50000'}, // inline base64 URLs for <=8k images, direct URLs for the rest
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=[path][name].[ext]" },
          { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=[path][name].[ext]&limit=50000&mimetype=application/octet-stream" },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=[path][name].[ext]&limit=50000&mimetype=image/svg+xml" }
        ]
    }
};

module.exports = config;
