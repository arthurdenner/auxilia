import 'moment/locale/pt-br';

import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configure-store';
import Main from './containers/main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const App = () => (
  <LocaleProvider locale={require('antd/lib/locale-provider/pt_BR')}>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
