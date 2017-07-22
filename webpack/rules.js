const path = require('path');
const important = require('postcss-important');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = path.join(__dirname, '../src');

const defaultRules = [
  { test: /\.eot(\?v=\d+.\d+.\d+)?$/, include: srcDir, loader: 'file-loader' },
  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, include: srcDir, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
  { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, include: srcDir, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, include: srcDir, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
  { test: /\.(jpe?g|png|gif)$/i, include: srcDir, loader: 'file-loader?name=[name].[ext]' },
  { test: /\.ico$/, include: srcDir, loader: 'file-loader?name=[name].[ext]' },
  { test: /\.jsx?$/, include: srcDir, loader: 'babel-loader' },
  { test: /\.ini$/, include: srcDir, loader: 'ini-loader' },
];

const devRules = [
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.less$/,
    include: srcDir,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: true,
          localIdentName: '[name]__[local]__[hash:base64:10]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer, important],
        },
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
];

const prodRules = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    }),
  },
  {
    test: /\.less$/,
    include: srcDir,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: true,
            localIdentName: '[name]__[local]__[hash:base64:10]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer, important],
          },
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }),
  },
];

const rules = process.env.NODE_ENV !== 'production' ? devRules : prodRules;

module.exports = defaultRules.concat(rules);
