// import { createAction } from 'redux-actions';
import { createActions } from 'redux-actions';
import defaultActionHandler from '~/helpers/action-handler';

export default createActions({
  PROGRAMAS: {
    ADD: defaultActionHandler,
    DELETE: defaultActionHandler,
    UPDATE: defaultActionHandler,
    SELECT: defaultActionHandler,
    FETCH: {
      REQUEST: defaultActionHandler,
      RESOLVE: defaultActionHandler,
    },
  },
});

// export const addPrograma = createAction('ADD_PROGRAMA');
// export const deletePrograma = createAction('DELETE_PROGRAMA');
// export const updatePrograma = createAction('UPDATE_PROGRAMA');
// export const selectPrograma = createAction('SELECT_PROGRAMA');
