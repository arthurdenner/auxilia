import { handleActions } from 'redux-actions';
// import v4 from 'uuid/v4';
import actions from '~/store/actions';
// import { getUser } from '~/store/selectors';
// import selecoes from '~/_static/selecoes';

export default handleActions({
  [actions.addSelecao]: state => state,
}, []);
