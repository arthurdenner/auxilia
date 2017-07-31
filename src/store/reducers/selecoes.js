import { handleActions } from 'redux-actions';
import { filter } from 'lodash/fp';
import actions from '~/store/actions';

export default handleActions({
  [actions.selecoes.add.resolve]: (state, { payload }) => [...state, payload],

  [actions.selecoes.update.resolve]: (state, { payload }) => state.map(programa =>
    programa.idSelecao === payload.idSelecao ? payload : programa),

  [actions.selecoes.delete.resolve]: (state, { payload }) =>
    filter(prog => prog.idSelecao !== payload, state),

  [actions.selecoes.fetch.resolve]: (state, { payload }) => payload,
}, []);

// export default handleActions({
//   [actions.addSelecao]: (state, { payload }) => {
//     console.log(getPrograma(Number(payload.programa)));
//     return [
//     ...state,
//     {
//       ...payload,
//       _id: v4(),
//       criador: {
//         _id: getUser()._id,
//         nome: getUser().nome,
//       },
//       programa: {
//         _id: payload.programa,
//         nome: getPrograma(Number(payload.programa)).titulo,
//       },
//       participantes: [],
//     },
//   ]},
//   [actions.updateSelecao]: (state, { payload }) => state.map(selecao =>
//     selecao._id === payload._id ? {
//       ...selecao,
//       ...payload,
//       programa: {
//         _id: payload.programa,
//         nome: getPrograma(payload.programa).nome,
//       },
//     } : selecao),
//   [actions.deleteSelecao]: (state, { payload }) => filter(({ _id }) => _id !== payload, state),
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
