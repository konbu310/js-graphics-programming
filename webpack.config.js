const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImagesConfigWebpackPlugin = require("image-config-webpack-plugin");
const ScssConfigWebpackPlugin = require("scss-config-webpack-plugin");
const TsConfigWebpackPlugin = require("ts-config-webpack-plugin");
const path = require("path");
const nodeEnv = process.env.NODE_ENV;
const isProd = nodeEnv === "production";
const outputPath = path.resolve(__dirname, isProd ? "docs" : "dist");

module.exports = {
  mode: isProd ? "production" : "development",
  entry: path.resolve(__dirname, "src/script/index.ts"),
  output: {
    filename: "bundle.js",
    path: outputPath
  },
  devtool: !isProd && "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/template/index.html"),
      title: "Shooting Game"
    }),
    new ImagesConfigWebpackPlugin(),
    new ScssConfigWebpackPlugin(),
    new TsConfigWebpackPlugin()
  ],
  devServer: {
    contentBase: outputPath
  }
};
