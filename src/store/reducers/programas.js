import { handleActions } from 'redux-actions';
import { filter } from 'lodash/fp';
// import v4 from 'uuid/v4';
import actions from '~/store/actions';
// import { getUser } from '~/store/selectors';
// import programas from '~/_static/programas';

export default handleActions({
  [actions.programas.add.resolve]: (state, { payload }) => [...state, payload],
  [actions.updatePrograma]: (state, { payload }) => state.map(programa =>
    programa._id === payload._id ? { ...programa, ...payload } : programa),
  [actions.deletePrograma]: (state, { payload }) => filter(({ _id }) => _id !== payload, state),
  [actions.programas.fetch.resolve]: (state, { payload }) => payload,
}, []);
