const path = require('path');

module.exports = {
  entry: './src/frontend/Main.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/js')
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
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: ["./", "./public"],
    publicPath: "/js",
    watchContentBase: true,
    port: 8080,
    open: true
  }
};
