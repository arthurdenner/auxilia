import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import programas from './programas';

export default combineReducers({
  app,
  auth,
  programas,
});
