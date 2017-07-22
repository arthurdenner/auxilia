import { createAction } from 'redux-actions';

export const addSelecao = createAction('ADD_SELECAO');
export const deleteSelecao = createAction('DELETE_SELECAO');
export const updateSelecao = createAction('UPDATE_SELECAO');
export const selectSelecao = createAction('SELECT_SELECAO');
export const enterSelecao = createAction('ENTER_SELECAO');
export const leaveSelecao = createAction('LEAVE_SELECAO');
