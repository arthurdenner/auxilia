import { createAction } from 'redux-actions';

export const showModalCriarPrograma = createAction('SHOW-CRIAR-PROGRAMA');
export const hideModalCriarPrograma = createAction('HIDE-CRIAR-PROGRAMA');

export const showModalCriarSelecao = createAction('SHOW-CRIAR-SELECAO');
export const hideModalCriarSelecao = createAction('HIDE-CRIAR-SELECAO');

export const showModalLogin = createAction('SHOW-LOGIN');
export const hideModalLogin = createAction('HIDE-LOGIN');

export const showModalCadastro = createAction('SHOW-CADASTRO');
export const hideModalCadastro = createAction('HIDE-CADASTRO');
