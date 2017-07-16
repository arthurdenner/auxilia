import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../actions';

export default combineReducers({
  data: handleActions({
    [actions.authorize]: (state, { payload }) => payload,
    [actions.unauthorize]: () => ({}),
  }, {}),
  typeUser: handleActions({}, 'servidor'),
});
