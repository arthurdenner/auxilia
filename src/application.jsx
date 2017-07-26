import 'moment/locale/pt-br';

import React from 'react';
import { LocaleProvider } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configure-store';
import Main from './containers/main';

const Application = () => (
  <LocaleProvider locale={require('antd/lib/locale-provider/pt_BR')}>
    <Provider store={store}>
      <BrowserRouter>
        <Route pattern="/" component={Main} />
      </BrowserRouter>
    </Provider>
  </LocaleProvider>
);

export default Application;
