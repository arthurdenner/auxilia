import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './containers/main';

const Application = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route pattern="/" component={Main} />
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Application;
