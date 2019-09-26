const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: path.resolve(__dirname, "src", "public", "ts", "main.tsx"),
  output: {
    path: distPath,
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".json", ".jsx", ".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      output: distPath,
      template: path.join(__dirname, "src", "public", "index.html")
    })
  ]
};
