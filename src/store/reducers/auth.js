import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import usuario from '~/_static/usuario';
import actions from '../actions';

export default combineReducers({
  data: handleActions({
    [actions.authorize]: (state, { payload }) => payload,
    [actions.unauthorize]: () => ({}),
  }, {
    usuario,
  }),
});
