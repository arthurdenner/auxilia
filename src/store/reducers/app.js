import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { F, T } from 'lodash/fp';
import actions from '../actions';

export default combineReducers({
  selectedTab: handleActions({
    [actions.selectTab]: (state, { payload }) => payload,
  }, ['item_1']),
  loading: handleActions({
    [actions.programas.add.request]: T,
    [actions.programas.add.resolve]: F,
    [actions.programas.add.error]: F,
    [actions.programas.delete.request]: T,
    [actions.programas.delete.resolve]: F,
    [actions.programas.delete.error]: F,
    [actions.programas.update.request]: T,
    [actions.programas.update.resolve]: F,
    [actions.programas.update.error]: F,

    [actions.selecoes.add.request]: T,
    [actions.selecoes.add.resolve]: F,
    [actions.selecoes.add.error]: F,
    [actions.selecoes.delete.request]: T,
    [actions.selecoes.delete.resolve]: F,
    [actions.selecoes.delete.error]: F,
    [actions.selecoes.update.request]: T,
    [actions.selecoes.update.resolve]: F,
    [actions.selecoes.update.error]: F,
    [actions.selecoes.enter.request]: T,
    [actions.selecoes.enter.resolve]: F,
    [actions.selecoes.enter.error]: F,
    [actions.selecoes.leave.request]: T,
    [actions.selecoes.leave.resolve]: F,
    [actions.selecoes.leave.error]: F,
  }, false),
});
