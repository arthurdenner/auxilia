import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../actions';
// import usuario from '~/_static/usuario';

export default combineReducers({
  data: handleActions({
    [actions.login]: (state, { payload }) => ({
      ...state,
      usuario: payload,
    }),
    [actions.logout]: () => ({}),
  }, {}),
});
