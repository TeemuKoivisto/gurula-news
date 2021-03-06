const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "webpack/hot/only-dev-server",
    "./src/index",
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    loaders: [
      {
        test: /\.(scss)$/,
        loaders: [
          'style',
          'css',
          // "postcss"
          'sass',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        loader: 'babel'
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    modulesDirectories: ["node_modules", "src"],
    extensions: ["", ".js"],
  },
}
