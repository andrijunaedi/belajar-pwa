const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    watchOptions: {
      poll: true,
      ignored: '/node_modules/',
    },
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/service-worker.js',
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: './src/site.webmanifest',
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: './src/img',
          to: path.resolve(__dirname, 'dist/img'),
        },
      ],
    }),
  ],
};
