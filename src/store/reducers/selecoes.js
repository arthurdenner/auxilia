import { handleActions } from 'redux-actions';
import v4 from 'uuid/v4';
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
}, []);
