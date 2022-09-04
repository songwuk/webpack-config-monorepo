const HtmlWebpackPlugin = require('html-webpack-plugin')
const HeadWebpackPlugin = require("head-webpack-plugin")
const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV)
const path = require('path')
module.exports = {
  mode: NODE_ENV,
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new HeadWebpackPlugin([
      {
        "charset": 'UTF-8',
      },
      {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge"
      },
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0"
      }
    ])
  ]
}
