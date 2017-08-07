import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { F, T, flip, get } from 'lodash/fp';
import actions from '../actions';

export default combineReducers({
  selectedTab: handleActions({
    [actions.selectTab]: (state, { payload }) => payload,
  }, ['item_1']),
  loading: handleActions({
    [actions.programas.add.request]: T,
    [actions.programas.add.resolve]: F,
    [actions.programas.add.error]: F,
    [actions.programas.update.request]: T,
    [actions.programas.update.resolve]: F,
    [actions.programas.update.error]: F,

    [actions.selecoes.add.request]: T,
    [actions.selecoes.add.resolve]: F,
    [actions.selecoes.add.error]: F,
    [actions.selecoes.update.request]: T,
    [actions.selecoes.update.resolve]: F,
    [actions.selecoes.update.error]: F,
  }, false),
  loadingPrograma: handleActions({
    [actions.programas.delete.request]: flip(get('payload.data')),
    [actions.programas.delete.resolve]: () => null,
    [actions.programas.delete.error]: () => null,
  }, null),
  loadingSelecao: handleActions({
    [actions.selecoes.delete.request]: flip(get('payload.data')),
    [actions.selecoes.delete.resolve]: () => null,
    [actions.selecoes.delete.error]: () => null,
    [actions.selecoes.enter.request]: flip(get('payload.data.idSelecao')),
    [actions.selecoes.enter.resolve]: () => null,
    [actions.selecoes.enter.error]: () => null,
    [actions.selecoes.leave.request]: flip(get('payload.data.idSelecao')),
    [actions.selecoes.leave.resolve]: () => null,
    [actions.selecoes.leave.error]: () => null,
  }, null),
});
