const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webCommon = require("./webpack.common.config");

module.exports = merge(webCommon, {
  devtool: "cheap-module-source-map",
  mode: "development",
  devServer: {
    port: 8081,
    host: "localhost",
    hot: true,
    proxy: [
      {
        context: ['/**'],
        target: 'htp://localhost:8000'
      }
    ]
    // disableHostCheck: true,
    // compress: true,
    // contentBase: path.join(__dirname, "../public/"),
    // writeToDisk: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}), // HMR plugin
  ],
});
