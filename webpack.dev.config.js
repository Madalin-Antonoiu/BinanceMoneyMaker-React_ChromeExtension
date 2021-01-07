const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const WriteFilePlugin = require("write-file-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(baseConfig, {
  devtool: "source-map",
  //Export path, dont forget to import it first
  output: {
    path: path.resolve(__dirname, "extension/dist"),
  },
  devServer: {
    hot: true,
    // enable https to get rid of ws connection failures from injected https pages
    // https: true,
    port: 4000,
    clientLogLevel: "none",
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["eslint-loader"],
      },
    ],
  },
  plugins: [new WriteFilePlugin(), new webpack.HotModuleReplacementPlugin()],
});
