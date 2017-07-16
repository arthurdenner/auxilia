import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '../actions';

export default combineReducers({
  selectedTab: handleActions({
      [actions.selectTab]: (state, { payload }) => payload,
    }, ['item_1']),
});
