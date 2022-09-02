const HtmlWebpackPlugin = require('html-webpack-plugin')
const HeadWebpackPlugin = require("head-webpack-plugin")
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
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
