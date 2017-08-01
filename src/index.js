import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { AppContainer } from 'react-hot-loader';
import { store } from './store/configure-store';
import Application from './application';
import './index.css';

const rootEl = document.querySelector('#root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <LocaleProvider locale={require('antd/lib/locale-provider/pt_BR')}>
        <Component store={store} />
      </LocaleProvider>
    </AppContainer>,
    rootEl,
  );
};

render(Application);

if (module.hot) {
  module.hot.accept('./application', () => {
    const NextApp = require('./application').default;

    render(NextApp);
  });
}
