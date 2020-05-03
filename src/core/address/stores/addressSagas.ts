import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest, postRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import {PayloadAction} from '@reduxjs/toolkit';
import addressActions from './addressActions';
import {AddressRequest} from './addressTypes';

function* loadAddressMap(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? addressActions.successLoadAddressMap(response.data)
      : addressActions.errorLoadAddressMap(
          getErrorMessage(response, 'İstenilen adres bilgileri bulunamadı.')
        )
  );
}

function* onLoadAddressMap() {
  yield takeLatest(addressActions.requestLoadAddressMap.type, loadAddressMap);
}

function* upsertAddress(action: PayloadAction<AddressRequest>): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, `url/${action.payload}`);
  return yield put(
    response.successful
      ? addressActions.successUpsertAddress(response.data)
      : addressActions.errorUpsertAddress(
          getErrorMessage(
            response,
            'İstenilen adres güncellenirken bir hata oluştu.'
          )
        )
  );
}

function* onUpsertAddress() {
  yield takeLatest(addressActions.requestUpsertAddress.type, upsertAddress);
}

function* deleteAddress(action: PayloadAction<number>): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, `url/${action.payload}`);
  return yield put(
    response.successful
      ? addressActions.successDeleteAddress()
      : addressActions.errorDeleteAddress(
          getErrorMessage(
            response,
            'İstenilen adres silinirken bir hata oluştu.'
          )
        )
  );
}

function* onDeleteAddress() {
  yield takeLatest(addressActions.requestDeleteAddress.type, deleteAddress);
}

export default [onLoadAddressMap, onUpsertAddress, onDeleteAddress];
