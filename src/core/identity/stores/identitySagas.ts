import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, postRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import identityActions from './identityActions';
import {PayloadAction} from '@reduxjs/toolkit';
import {User} from './identityTypes';

function* requestLogin(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, 'url');
  return yield put(
    response.successful
      ? identityActions.successLogin(response.data)
      : identityActions.errorLogin(
          getErrorMessage(response, 'İstenilen kullanıcı bilgisi bulunamadı.')
        )
  );
}

function* onRequestLogin() {
  yield takeLatest(identityActions.requestLogin.type, requestLogin);
}

function* requestLogout(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, 'url');
  return yield put(
    response.successful
      ? identityActions.successLogout()
      : identityActions.errorLogout(
          getErrorMessage(response, 'Kullanıcı çıkış yaparken bir hata oluştu.')
        )
  );
}

function* onRequestLogout() {
  yield takeLatest(identityActions.requestLogout.type, requestLogout);
}

function* requestUpdateUser(action: PayloadAction<User>): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, 'url', action.payload);
  return yield put(
    response.successful
      ? identityActions.successUpdateUser(response.data)
      : identityActions.errorUpdateUser(
          getErrorMessage(response, 'Kullanıcı güncellenirken bir hata oluştu.')
        )
  );
}

function* onRequestUpdateUser() {
  yield takeLatest(identityActions.requestUpdateUser.type, requestUpdateUser);
}

export default [onRequestLogin, onRequestLogout, onRequestUpdateUser];
