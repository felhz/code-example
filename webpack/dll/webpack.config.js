const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.join(__dirname, './src/index.js'), // 频繁使用的模块
  },
  output: {},
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dll/vendor.manifest.json'),
    }),
  ],
};
