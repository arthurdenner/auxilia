import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { get, throttle } from 'lodash';
import { appkey } from '~/constants';
import reducers from './reducers';

const loadState = () => {
  try {
    return JSON.parse(localStorage.getItem(appkey)) || {};
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem(appkey, JSON.stringify(state));
  } catch (err) {
    console.log(err);
  }
};

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk));

const store = createStore(reducers, loadState(), middleware);

store.subscribe(throttle(() => {
  const { app: { selectedTab }, auth: { data }, programas, selecoes } = store.getState();
  const state = { app: { selectedTab }, auth: { data }, programas, selecoes };

  saveState(state, 1000);
}));

export const getData = (attr, notFound) => get(store.getState(), attr, notFound);

export default store;
