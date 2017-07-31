import notification from '~/helpers/notification';
import { put, call, takeEvery } from 'redux-saga/effects';
import actions from '../actions';
import * as API from '../api';

const FETCH_ERROR = 'Houve um erro na requisição.';

function* fetchSelecoes() {
  const response = yield call(API.read, 'selecao/');

  if (response.status === 200) {
    yield put(actions.selecoes.fetch.resolve(response.data));
  } else {
    console.log(response);
    yield put(actions.selecoes.fetch.resolve(new Error(FETCH_ERROR)));
  }
}

function* addSelecao({ payload }) {
  const response = yield call(API.create, 'selecao/', payload);

  if (response.status === 201) {
    notification('success', 'A seleção foi criada!');
    yield put(actions.selecoes.add.resolve(response.data));
  } else {
    console.log(response);
    // yield put(actions.selecoes.add.resolve(new Error(FETCH_ERROR)));
  }
}

function* updateSelecao({ payload }) {
  const response = yield call(API.update, `selecao/${payload.idSelecao}`, payload);

  if (response.status === 200) {
    notification('success', 'A seleção foi atualizada!');
    yield put(actions.selecoes.update.resolve(response.data));
  } else {
    console.log(response);
    // yield put(actions.selecoes.update.resolve(new Error(FETCH_ERROR), e));
  }
}

function* deleteSelecao({ payload }) {
  const response = yield call(API.remove, `selecao/${payload}`);

  if (response.status === 204) {
    notification('success', 'A seleção foi deletada!');
    yield put(actions.selecoes.delete.resolve(payload));
  } else {
    console.log(response);
    // yield put(actions.selecoes.delete.resolve(new Error(FETCH_ERROR), e));
  }
}

function* enterSelecao({ payload: { idSelecao, idUsuario } }) {
  const response = yield call(API.create, `selecao/${idSelecao}/participantes`, Number(idUsuario));

  if (response.status === 201) {
    notification('success', 'Você entrou na seleção!');
    yield put(actions.selecoes.enter.resolve(response.data));
  } else {
    console.log(response);
    // yield put(actions.selecoes.enter.resolve(new Error(FETCH_ERROR), e));
  }
}

function* leaveSelecao({ payload: { idSelecao, idUsuario } }) {
  const response = yield call(API.remove, `selecao/${idSelecao}/participantes`, Number(idUsuario));

  if (response.status === 201) {
    notification('success', 'Você saiu da seleção!');
    yield put(actions.selecoes.leave.resolve(response.data));
  } else {
    console.log(response);
    // yield put(actions.selecoes.leave.resolve(new Error(FETCH_ERROR), e));
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
