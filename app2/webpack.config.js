const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "app2",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./app.jsx": "./src/app.jsx",
    //   },
    //   shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    // }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
