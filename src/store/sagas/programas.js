import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import * as API from '../api';

function* fetchProgramas({ onError }) {
  const response = yield call(API.read, 'programa/');

  if (response.status === 200) {
    yield put(actions.programas.fetch.resolve(response.data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.programas.fetch.error());
  }
}

function* addPrograma({ payload: { data, onSuccess, onError } }) {
  const response = yield call(API.create, 'programa/', data);

  if (response.status === 201) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.programas.add.resolve(response.data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.programas.add.error());
  }
}

function* updatePrograma({ payload: { data, onSuccess, onError } }) {
  const response = yield call(API.update, `programa/${data.idPrograma}`, data);

  if (response.status === 200) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.programas.update.resolve(response.data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.programas.update.error());
  }
}

function* deletePrograma({ payload: { data, onSuccess, onError } }) {
  const response = yield call(API.remove, `programa/${data}`);

  if (response.status === 204) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.programas.delete.resolve(data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.programas.delete.resolve());
  }
}

export default function* () {
  yield takeEvery(actions.programas.fetch.request, fetchProgramas);
  yield takeEvery(actions.programas.add.request, addPrograma);
  yield takeEvery(actions.programas.update.request, updatePrograma);
  yield takeEvery(actions.programas.delete.request, deletePrograma);
}
