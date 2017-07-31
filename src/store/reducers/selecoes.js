import { handleActions } from 'redux-actions';
import { filter } from 'lodash/fp';
import actions from '~/store/actions';

export default handleActions({
  [actions.selecoes.add.resolve]: (state, { payload }) => [...state, payload],

  [actions.selecoes.update.resolve]: (state, { payload }) => state.map(selecao =>
    selecao.idSelecao === payload.idSelecao ? payload : selecao),

  [actions.selecoes.delete.resolve]: (state, { payload }) =>
    filter(sel => sel.idSelecao !== payload, state),

  [actions.selecoes.fetch.resolve]: (state, { payload }) => payload,

  [actions.selecoes.enter.resolve]: (state, { payload }) => payload, // fazer

  [actions.selecoes.leave.resolve]: (state, { payload }) => payload, // fazer
}, []);

// export default handleActions({
//   [actions.enterSelecao]: (state, { payload }) => state.map(selecao =>
//     selecao._id === payload ? {
//       ...selecao,
//       participantes: [
//         ...selecao.participantes,
//         getUser()._id,
//       ],
//     } : selecao),
//   [actions.leaveSelecao]: (state, { payload }) => state.map(selecao =>
//     selecao._id === payload ? {
//       ...selecao,
//       participantes: without(selecao.participantes, getUser()._id),
//     } : selecao),
// }, []);
