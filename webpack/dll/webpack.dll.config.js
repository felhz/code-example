const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'], // 频繁使用的模块
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_library',
      path: path.join(__dirname, 'dll', '[name].manifest.json'),
    }),
  ],
};
