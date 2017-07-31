import { all, fork } from 'redux-saga/effects';
import { map, unary } from 'lodash/fp';
import programas from './programas';
import selecoes from './selecoes';

export default function* () {
  const _sagas = [
    programas,
    selecoes,
  ];

  yield all(map(unary(fork), _sagas));
}
