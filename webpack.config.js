var path = require('path');
var DEST = path.resolve(__dirname, 'src/main/webapp/dist');

module.exports = {
  entry: './src/main/client/client.js',
  devtool: 'inline-source-map',
  output: {
    path: DEST,
    filename: 'bundle.js',
    publicPath: '/dist/',
    library: 'GameClient',
    libraryTarget: "window"
  },   
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};