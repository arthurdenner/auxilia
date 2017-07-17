import { handleActions } from 'redux-actions';
import { filter } from 'lodash/fp';
import v4 from 'uuid/v4';
import actions from '~/store/actions';
import { getUser } from '~/store/selectors';

export default handleActions({
  [actions.addPrograma]: (state, { payload }) => [
    ...state,
    {
      _id: v4(),
      criador: {
        _id: getUser()._id,
        nome: getUser().nome,
      },
      ...payload,
    },
  ],
  [actions.updatePrograma]: (state, { payload }) => state.map(programa =>
    programa._id === payload._id ? { ...programa, ...payload } : programa),
  [actions.deletePrograma]: (state, { payload }) => filter(({ _id }) => _id !== payload, state),
}, []);
