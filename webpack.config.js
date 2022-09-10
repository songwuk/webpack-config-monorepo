const HtmlWebpackPlugin = require('html-webpack-plugin')
const HeadWebpackPlugin = require("head-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const NODE_ENV = process.env.NODE_ENV;
const path = require('path')
module.exports = {
  mode: NODE_ENV,
  entry: {
    vueApp: './main.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  externals:{
    vue: 'Vue'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'}),
    new VueLoaderPlugin(),
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
