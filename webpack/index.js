const path = require('path');
const entry = require('./entry');
const plugins = require('./plugins');
const rules = require('./rules');

const DEV = process.env.NODE_ENV !== 'production';
const publicPath = 'http://localhost:3000/';
const srcDir = path.join(__dirname, '../src');
const outDir = path.join(__dirname, '../dist');

module.exports = {
  entry,
  plugins,
  context: srcDir,
  devtool: DEV ? 'eval' : 'cheap-hidden-source-map',
  output: {
    filename: DEV ? '[name].js' : '[name].min.js',
    path: outDir,
    publicPath: DEV ? publicPath : '/',
  },
  module: { rules },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [srcDir, 'node_modules'],
    mainFiles: ['index', '_index'],
  },
  devServer: {
    publicPath,
    contentBase: outDir,
    hot: true,
    port: 3000,
    historyApiFallback: true,
    stats: {
      chunks: false,
      colors: true,
      reasons: true,
    },
  },
};
