import { handleActions } from 'redux-actions';
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
}, []);
