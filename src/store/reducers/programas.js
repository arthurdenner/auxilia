import { handleActions } from 'redux-actions';
import { filter } from 'lodash/fp';
// import v4 from 'uuid/v4';
import actions from '~/store/actions';
// import { getUser } from '~/store/selectors';
// import programas from '~/_static/programas';

export default handleActions({
  [actions.programas.add.resolve]: (state, { payload }) => [...state, payload],
  [actions.programas.update.resolve]: (state, { payload }) => state.map(programa =>
    programa.id_programa === payload.id_programa ? payload : programa),
  [actions.programas.delete.resolve]: (state, { payload }) =>
    filter(prog => prog.id_programa !== payload, state),
  [actions.programas.fetch.resolve]: (state, { payload }) => payload,
}, []);
