const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var config = {
  entry: {
    "react-bootstrap-carousel": path.resolve(__dirname, "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "ReactBootstrap_Carousel",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  plugins: [new CopyWebpackPlugin([{ from: "app/assert", to: "./" }])],
  resolve: { alias: {} },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  }
};
module.exports = config;
