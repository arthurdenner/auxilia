import { handleActions } from 'redux-actions';
import programas from '~/_static/programas';
import actions from '../actions';

export default handleActions({
  [actions.addPrograma]: state => state,
}, programas);
