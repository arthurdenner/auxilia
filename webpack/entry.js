const devEntry = {
  app: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
};

const prodEntry = {
  app: [
    './index.js',
  ],
  vendor: [
    'axios',
    'classnames',
    'keymirror',
    'latinize',
    'moment',
    'mout',
    'prop-types',
    'pluralize',
    'react',
    'react-dom',
    'react-hot-loader',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-actions',
    'redux-async-initial-state',
    'redux-thunk',
    'uuid',
  ],
};

module.exports = process.env.NODE_ENV !== 'production' ? devEntry : prodEntry;
