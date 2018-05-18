const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle2.js',
    path: path.resolve(__dirname, 'wwwroot/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react']
          }
        }
      }
    ]
  }
};