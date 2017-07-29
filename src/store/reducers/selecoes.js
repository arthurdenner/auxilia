import { handleActions } from 'redux-actions';
import v4 from 'uuid/v4';
import { filter } from 'lodash/fp';
import { without } from 'lodash';
import actions from '~/store/actions';
import { getPrograma, getUser } from '~/store/selectors';
// import selecoes from '~/_static/selecoes';

export default handleActions({
  [actions.addSelecao]: (state, { payload }) => {
    console.log(getPrograma(Number(payload.programa)));
    return [
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
        nome: getPrograma(Number(payload.programa)).titulo,
      },
      participantes: [],
    },
  ]},
  [actions.updateSelecao]: (state, { payload }) => state.map(selecao =>
    selecao._id === payload._id ? {
      ...selecao,
      ...payload,
      programa: {
        _id: payload.programa,
        nome: getPrograma(payload.programa).nome,
      },
    } : selecao),
  [actions.deleteSelecao]: (state, { payload }) => filter(({ _id }) => _id !== payload, state),
  [actions.enterSelecao]: (state, { payload }) => state.map(selecao =>
    selecao._id === payload ? {
      ...selecao,
      participantes: [
        ...selecao.participantes,
        getUser()._id,
      ],
    } : selecao),
  [actions.leaveSelecao]: (state, { payload }) => state.map(selecao =>
    selecao._id === payload ? {
      ...selecao,
      participantes: without(selecao.participantes, getUser()._id),
    } : selecao),
}, []);
