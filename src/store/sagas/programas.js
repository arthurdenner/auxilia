import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import * as API from '../api';

const FETCH_ERROR = 'Houve um erro na requisição.';

function* fetchProgramas() {
  try {
    const response = yield call(API.read, 'programa/');
    yield put(actions.programas.fetch.resolve(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.programas.fetch.resolve(new Error(FETCH_ERROR), e));
  }
}

function* addPrograma({ payload }) {
  try {
    const response = yield call(API.create, 'programa/', payload);
    yield put(actions.programas.add.resolve(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.programas.add.resolve(new Error(FETCH_ERROR), e));
  }
}

export default function* () {
  yield takeEvery(actions.programas.fetch.request, fetchProgramas);
  yield takeEvery(actions.programas.add.request, addPrograma);
}
