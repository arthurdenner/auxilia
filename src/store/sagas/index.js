import { fork } from 'redux-saga/effects';
import { map, unary } from 'lodash/fp';
import programas from './programas';

export default function* () {
  const _sagas = [
    programas,
  ];

  yield map(unary(fork), _sagas);
}
