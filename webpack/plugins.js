const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const defaultPlugins = [
  new HtmlWebpackPlugin({
    hash: true,
    template: '../src/www/index.html',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
    },
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
];

const prodPlugins = [
  new ExtractTextPlugin('style.css'),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      screw_ie8: true,
      warnings: false,
    },
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
  }),
  new LodashModuleReplacementPlugin({
    paths: true,
    shorthands: true,
    cloning: true,
    currying: true,
    caching: true,
    collections: true,
    exotics: true,
    guards: true,
    metadata: true,
    deburring: true,
    unicode: true,
    chaining: true,
    memoizing: true,
    coercions: true,
    flattening: true,
    placeholders: true,
  }),
];

const plugins = process.env.NODE_ENV !== 'production' ? devPlugins : prodPlugins;

module.exports = defaultPlugins.concat(plugins);
