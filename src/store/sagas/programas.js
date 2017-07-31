import notification from '~/helpers/notification';
import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import * as API from '../api';

const FETCH_ERROR = 'Houve um erro na requisição.';

function* fetchProgramas() {
  const response = yield call(API.read, 'programa/');

  if (response.status === 200) {
    yield put(actions.programas.fetch.resolve(response.data));
  } else {
    console.log(response);
    yield put(actions.programas.fetch.resolve(new Error(FETCH_ERROR)));
  }
}

function* addPrograma({ payload }) {
  const response = yield call(API.create, 'programa/', payload);

  if (response.status === 201) {
    notification('success', 'O programa foi criado!');
    yield put(actions.programas.add.resolve(response.data));
  } else {
    console.log(response);
    // yield put(actions.programas.add.resolve(new Error(FETCH_ERROR)));
  }
}

function* updatePrograma({ payload }) {
  const response = yield call(API.update, `programa/${payload.id_programa}`, payload);

  if (response.status === 200) {
    notification('success', 'O programa foi atualizado!');
    yield put(actions.hideModalCriarPrograma());
    yield put(actions.programas.update.resolve(response.data));
  } else {
    console.log(response);
    // yield put(actions.programas.update.resolve(new Error(FETCH_ERROR), e));
  }
}

function* deletePrograma({ payload }) {
  const response = yield call(API.remove, `programa/${payload}`);

  if (response.status === 204) {
    notification('success', 'O programa foi deletado!');
    yield put(actions.programas.delete.resolve(payload));
  } else {
    console.log(response);
    // yield put(actions.programas.delete.resolve(new Error(FETCH_ERROR), e));
  }
}

export default function* () {
  yield takeEvery(actions.programas.fetch.request, fetchProgramas);
  yield takeEvery(actions.programas.add.request, addPrograma);
  yield takeEvery(actions.programas.update.request, updatePrograma);
  yield takeEvery(actions.programas.delete.request, deletePrograma);
}
