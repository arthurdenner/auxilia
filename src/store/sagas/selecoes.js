import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import * as API from '../api';

function* fetchSelecoes({ onError }) {
  const response = yield call(API.read, 'selecao/');

  if (response.status === 200) {
    yield put(actions.selecoes.fetch.resolve(response.data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.selecoes.fetch.error());
  }
}

function* addSelecao({ payload: { data, onSuccess, onError } }) {
  const response = yield call(API.create, 'selecao/', data);

  if (response.status === 201) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.selecoes.add.resolve(response.data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.selecoes.add.error());
  }
}

function* updateSelecao({ payload: { data, onSuccess, onError } }) {
  const response = yield call(API.update, `selecao/${data.idSelecao}`, data);

  if (response.status === 200) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.selecoes.update.resolve(response.data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.selecoes.update.error());
  }
}

function* deleteSelecao({ payload: { data, onSuccess, onError } }) {
  const response = yield call(API.remove, `selecao/${data}`);

  if (response.status === 204) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.selecoes.delete.resolve(data));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.selecoes.delete.error());
  }
}

function* enterSelecao({ payload: { data: { idSelecao, idUsuario }, onSuccess, onError } }) {
  const response = yield call(API.create, `selecao/${idSelecao}/participantes/`, { idUsuario: Number(idUsuario) });

  if (response.status === 201) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.selecoes.enter.resolve({ idSelecao, usuario: response.data }));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.selecoes.enter.error());
  }
}

function* leaveSelecao({ payload: { data: { idSelecao, idUsuario }, onSuccess, onError } }) {
  const response = yield call(API.remove, `selecao/${idSelecao}/participantes/`, { idUsuario: Number(idUsuario) });

  if (response.status === 201) {
    if (onSuccess) {
      onSuccess();
    }

    yield put(actions.selecoes.leave.resolve({ idSelecao, usuario: response.data }));
  } else {
    if (onError) {
      onError();
    }

    yield put(actions.selecoes.leave.error());
  }
}

export default function* () {
  yield takeEvery(actions.selecoes.fetch.request, fetchSelecoes);
  yield takeEvery(actions.selecoes.add.request, addSelecao);
  yield takeEvery(actions.selecoes.update.request, updateSelecao);
  yield takeEvery(actions.selecoes.delete.request, deleteSelecao);
  yield takeEvery(actions.selecoes.enter.request, enterSelecao);
  yield takeEvery(actions.selecoes.leave.request, leaveSelecao);
}
