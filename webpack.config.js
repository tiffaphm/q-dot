//import path module to resolve filepaths
const path = require('path');

const config = {
  entry: {
    //if you have a new entry point for a new page, add it here
    customerApp: path.resolve(__dirname, 'client/src/customerIndex.jsx'),
    queueinfo: path.resolve(__dirname, 'client/src/queueinfo.jsx'),
    managerApp: path.resolve(__dirname, 'client/src/managerIndex.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'client/dist/js'),
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }

};

module.exports = config;