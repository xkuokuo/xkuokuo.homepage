const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const templateContent = require('./frontend/content')

module.exports = {
  entry: {
    'js/main': './frontend/src/Main.js'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/frontend/')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react-app/prod']
          }
        }
      },
      {
        test:/\.(s*)css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './frontend/index.ejs'),
      filename: 'index.html',
      content: templateContent
    })
  ],
  devServer: {
    // https://github.com/webpack/webpack-dev-server/issues/1227
    contentBase: [ path.join(__dirname, "./frontend"), path.join(__dirname, "./frontend/public"), path.join(__dirname, "./frontend/public/css")],
    watchContentBase: true,
    publicPath: "/",
    port: 8080,
    open: true
  }
};
