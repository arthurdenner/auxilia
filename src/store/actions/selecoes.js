import { createActions } from 'redux-actions';
import defaultActionHandler from '~/helpers/action-handler';

export default createActions({
  SELECOES: {
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
    },
    ENTER: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
      ERROR: defaultActionHandler,
    },
    LEAVE: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
      ERROR: defaultActionHandler,
    },
  },
});
