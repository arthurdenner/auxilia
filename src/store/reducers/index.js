import { combineReducers } from 'redux';
import auth from './auth';
import informativos from './informativos';
import programas from './programas';

export default combineReducers({
  auth,
  informativos,
  programas,
});
