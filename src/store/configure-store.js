import { applyMiddleware, compose, createStore } from 'redux';
import reduxSaga from 'redux-saga';
// import promise from 'redux-promise-middleware';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { get, throttle } from 'lodash';
import { appkey } from '~/constants';
import reducers from './reducers';
import sagas from './sagas';

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

const saga = reduxSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(reducers, loadState(), enhancer);

saga.run(sagas);

store.subscribe(throttle(() => {
  const { app: { selectedTab }, auth: { data } } = store.getState();
  const state = { app: { selectedTab }, auth: { data } };

  saveState(state, 1000);
}));

export const getData = (attr, notFound) => get(store.getState(), attr, notFound);

export default store;
