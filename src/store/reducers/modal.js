import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '~/store/actions';

export default combineReducers({
  criarPrograma: combineReducers({
    idPrograma: handleActions({
      [actions.selectPrograma]: (state, { payload }) => payload,
      [actions.hideModalCriarPrograma]: () => '',
    }, ''),
    isOpen: handleActions({
      [actions.showModalCriarPrograma]: () => true,
      [actions.hideModalCriarPrograma]: () => false,
    }, false),
  }),
  criarSelecao: combineReducers({
    isOpen: handleActions({
      [actions.showModalCriarSelecao]: () => true,
      [actions.hideModalCriarSelecao]: () => false,
    }, false),
  }),
});
