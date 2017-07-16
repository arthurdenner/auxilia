import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '~/store/actions';

export default combineReducers({
  criarPrograma: combineReducers({
    isOpen: handleActions({
      [actions.showModalCriarPrograma]: () => true,
      [actions.hideModalCriarPrograma]: () => false,
    }, true),
  }),
});
