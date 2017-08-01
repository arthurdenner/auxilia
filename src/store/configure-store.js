import createSagaMiddleware from 'redux-saga';
import { get, throttle } from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import { middleware, outerReducer } from 'redux-async-initial-state';
import { Cache, DEV } from '~/constants';
import reducers from './reducers';
import rootSaga from './sagas';

const loadState = currentState => new Promise((resolve) => {
  const state = JSON.parse(localStorage.getItem(Cache.KEY) || '{}');

  return resolve({ ...currentState, ...state });
});

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [sagaMiddleware, middleware(loadState)];

  if (DEV) {
    const { compose } = require('redux');
    const invariant = require('redux-immutable-state-invariant').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    middlewares = applyMiddleware(...middlewares.concat([invariant()]));
    middlewares = composeEnhancers ? composeEnhancers(middlewares) : compose(middlewares);
  } else {
    middlewares = applyMiddleware(...middlewares);
  }

  const store = createStore(outerReducer(reducers), middlewares);

  store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;

      store.replaceReducer(outerReducer(nextReducer));
    });
  }

  store.subscribe(throttle(() => {
    const { app: { selectedTab }, auth: { data } } = store.getState();
    const state = { app: { selectedTab }, auth: { data } };

    localStorage.setItem(Cache.KEY, JSON.stringify(state));
  }, 1000));

  store.runSaga(rootSaga);

  return store;
};

export const store = configureStore();

export const getData = (attr, notFound) => get(store.getState(), attr, notFound);

export default configureStore;
