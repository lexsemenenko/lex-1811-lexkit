const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "index.js")
  },

  output: {
    path: path.join(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },

      { test: /\.json$/, loader: "json-loader" },

      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      },

      // Webpack will use this loaders for any css files that it finds in the
      // index.js file, because this is our entry, or in another file which is imported in index.js

      {
        test: /\.(le|c)ss$/,  // For what files are the loaders
        exclude: /node_modules/,
        use: [                // What Loaders to use from bottom to top
          "style-loader",     // creates style nodes from JS strings
          MiniCssExtractPlugin.loader,  // Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
          "css-loader",       // Second, translates CSS into CommonJS
          "postcss-loader",
          "less-loader"       // First,compiles Less to CSS.
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    }),

    new AssetsPlugin({
      filename: "webpack.json",
      path: path.join(process.cwd(), "site/data"),
      prettyPrint: true
    }),

    new CopyWebpackPlugin([
      {
        from: "./src/fonts/",
        to: "fonts/",
        flatten: true
      },
      {
        from: "./src/img/",
        to: "img/",
        flatten: true
      }
    ])
  ]
};


// =============================================================================
// Notes
// =============================================================================

// # Loaders        
//                  A utility to help webpack to compile non-js resource types
//                  such as, css, assets, etc.