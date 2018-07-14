const path = require('path');

module.exports = {
  entry: './build/private/babel/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/js')
  }
};
