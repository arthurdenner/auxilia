import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import informativos from './informativos';
import programas from './programas';

export default combineReducers({
  app,
  auth,
  informativos,
  programas,
});
