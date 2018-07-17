const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    contact_me_lambda: './backend/src/contact_me_lambda.js'
  },
  externals: [
    'aws-sdk'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/backend/js'),
    library: "[name]",
    libraryTarget: "umd"
  },
  target: 'node'
};
