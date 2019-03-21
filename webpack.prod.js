const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[hash:5].js",
    chunkFilename: "[id].[hash:5].css"
  },

  optimization: {
    minimizer: [
      // Uglify JS not supporting es6. Use this instead https://github.com/webpack-contrib/terser-webpack-plugin
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // }),

      new MiniCssExtractPlugin({
        filename: "[name].[hash:5].css",
        chunkFilename: "[id].[hash:5].css"
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
