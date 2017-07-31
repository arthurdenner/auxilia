import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import actions from '~/store/actions';

export default combineReducers({
  cadastro: combineReducers({
    isOpen: handleActions({
      [actions.showModalCadastro]: () => true,
      [actions.hideModalCadastro]: () => false,
    }, false),
  }),
  criarPrograma: combineReducers({
    idPrograma: handleActions({
      [actions.programas.select]: (state, { payload }) => payload,
      [actions.hideModalCriarPrograma]: () => '',
    }, ''),
    isOpen: handleActions({
      [actions.showModalCriarPrograma]: () => true,
      [actions.hideModalCriarPrograma]: () => false,
    }, false),
  }),
  criarSelecao: combineReducers({
    idSelecao: handleActions({
      [actions.selecoes.select]: (state, { payload }) => payload,
      [actions.hideModalCriarSelecao]: () => '',
    }, ''),
    isOpen: handleActions({
      [actions.showModalCriarSelecao]: () => true,
      [actions.hideModalCriarSelecao]: () => false,
    }, false),
  }),
  login: combineReducers({
    isOpen: handleActions({
      [actions.showModalLogin]: () => true,
      [actions.hideModalLogin]: () => false,
    }, false),
  }),
});
