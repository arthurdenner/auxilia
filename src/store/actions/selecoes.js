import { createActions } from 'redux-actions';
import defaultActionHandler from '~/helpers/action-handler';

export default createActions({
  SELECOES: {
    ADD: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
    },
    DELETE: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
    },
    UPDATE: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
    },
    SELECT: defaultActionHandler,
    FETCH: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
    },
  },
});
