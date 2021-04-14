const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash][ext][query]"
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  }),
  new HtmlWebpackPlugin({
    template: "./public/index.html"
  }),
  new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(svg|jpg)$/,
        type: "asset/resource"
      }
    ]
  }
}