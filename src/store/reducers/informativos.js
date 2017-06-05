import { handleActions } from 'redux-actions';
import actions from '../actions';

export default handleActions({
  [actions.addInformativo]: state => state,
}, []);
