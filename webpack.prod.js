const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build/javascript"),
    filename: "bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "12",
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,

        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        type: "asset/inline",
      },
    ],
  },
  resolve: {
    fallback: {
      "react/jsx-runtime": "react/jsx-runtime.js",
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
    },
  },
};
