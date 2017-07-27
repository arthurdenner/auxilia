import { put, call, select, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import * as API from '../api';

const FETCH_ERROR = 'Houve um erro na requisição.';

function* fetchProgramas() {
  try {
    const response = yield call(API.read, 'programa/');
    console.log(response);
    // yield put(actions.listaEstadosBr.resolve(standardizeOpts(response.beans)));
  } catch (e) {
    console.log(e);
    // yield put(actions.listaEstadosBr.resolve(new Error(FETCH_ERROR), e));
  }
}

export default function* () {
  yield takeEvery(actions.programas.fetch.request, fetchProgramas);
}
