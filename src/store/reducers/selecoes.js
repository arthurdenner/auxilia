import { handleActions } from 'redux-actions';
import v4 from 'uuid/v4';
import { filter } from 'lodash/fp';
import actions from '~/store/actions';
import { getPrograma, getUser } from '~/store/selectors';
// import selecoes from '~/_static/selecoes';

export default handleActions({
  [actions.addSelecao]: (state, { payload }) => [
    ...state,
    {
      ...payload,
      _id: v4(),
      criador: {
        _id: getUser()._id,
        nome: getUser().nome,
      },
      programa: {
        _id: payload.programa,
        nome: getPrograma(payload.programa).nome,
      },
    },
  ],
  [actions.updateSelecao]: (state, { payload }) => state.map(selecao =>
    selecao._id === payload._id ? { ...selecao, ...payload } : selecao),
  [actions.deleteSelecao]: (state, { payload }) => filter(({ _id }) => _id !== payload, state),
}, []);
