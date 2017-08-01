import { createActions } from 'redux-actions';
import defaultActionHandler from '~/helpers/action-handler';

export default createActions({
  PROGRAMAS: {
    ADD: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
      ERROR: defaultActionHandler,
    },
    DELETE: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
      ERROR: defaultActionHandler,
    },
    UPDATE: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
      ERROR: defaultActionHandler,
    },
    SELECT: defaultActionHandler,
    FETCH: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
      ERROR: defaultActionHandler,
    },
  },
});
