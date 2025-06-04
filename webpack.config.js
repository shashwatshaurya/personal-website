const path = require("path");
const { ProgressPlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const buildFolderName = "build";

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, buildFolderName),
    filename: "main.js",
    publicPath: "/personal-website/", // specifies the location from where the browser will fetch resources, can be a url, cdn or path to another folder under the root directory ('public' in our case) or the root itself (as used here - '/'),
  },
  target: "web",
  devServer: {
    port: "9500", // port of dev server
    historyApiFallback: true, // if route is not found essentially for deeper level routes, then this defaults to index.html
    static: path.resolve(__dirname, "public"), // the static file webpack should serve
    open: true, // open browser on dev server start
    hot: true, // Hot Module Replacement
    liveReload: true, // liveReload as the name suggests
  },
  resolve: {
    /** "extensions"
     * if multiple files have same name resolve the one with the
     * extension listed first in the array and skip the rest.
     */
    extensions: [".js", ".jsx", ".json"],
    // "alias" - to create aliases for directories
    alias: {
      src: path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      common: path.resolve(__dirname, "./src/common"),
      styles: path.resolve(__dirname, "./src/styles"), // used with ~ prefix in scss files
    },
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.(js|jsx)$/, // kind of file extension this rule should look for and apply
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true, memo: true } }],
      },
    ],
  },
  /**
   * "cache"
   * type: fileystem | memory | false
   */
  cache: {
    type: "filesystem",
    compression: "gzip",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, `${buildFolderName}/images`),
        },
        {
          from: path.resolve(__dirname, "src/assets/pdf"),
          to: path.resolve(__dirname, `${buildFolderName}/pdf`),
        },
        {
          from: path.resolve(__dirname, "src/assets/icons"),
          to: path.resolve(__dirname, buildFolderName),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: path.resolve(__dirname, `${buildFolderName}/index.html`),
    }),
  ],
};
