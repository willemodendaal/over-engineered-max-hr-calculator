const path = require('path');

module.exports = {
  entry: { 
      'dist/index': './src/index.js',
      'serviceWorker': './src/serviceWorker.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'wwwroot')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','env']
          }
        }
      }
    ]
  }
};