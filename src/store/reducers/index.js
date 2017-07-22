import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import modal from './modal';
import programas from './programas';
import selecoes from './selecoes';

export default combineReducers({
  app,
  auth,
  modal,
  programas,
  selecoes,
});
