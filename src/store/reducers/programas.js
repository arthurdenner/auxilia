import { handleActions } from 'redux-actions';
import { filter } from 'lodash/fp';
import actions from '~/store/actions';

export default handleActions({
  [actions.programas.add.resolve]: (state, { payload }) => [...state, payload],

  [actions.programas.update.resolve]: (state, { payload }) => state.map(programa =>
    programa.idPrograma === payload.idPrograma ? payload : programa),

  [actions.programas.delete.resolve]: (state, { payload }) =>
    filter(prog => prog.idPrograma !== payload, state),

  [actions.programas.fetch.resolve]: (state, { payload }) => payload,
}, []);
