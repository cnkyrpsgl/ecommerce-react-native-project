import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest, postRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import paymentActions from './paymentActions';
import {PayloadAction} from '@reduxjs/toolkit';
import {PaymentCardRequest} from './paymentTypes';

function* loadPaymentMap(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? paymentActions.successLoadPaymentMap(response.data)
      : paymentActions.errorLoadPaymentMap(
          getErrorMessage(response, 'İstenilen ödeme bilgisi bulunamadı.')
        )
  );
}

function* onLoadPaymentMap() {
  yield takeLatest(paymentActions.requestLoadPaymentMap.type, loadPaymentMap);
}

function* addPaymentCard(
  action: PayloadAction<PaymentCardRequest>
): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, 'url', action.payload);
  return yield put(
    response.successful
      ? paymentActions.successAddPaymentCard(response.data)
      : paymentActions.errorAddPaymentCard(
          getErrorMessage(response, 'İstenilen kart bilgisi eklenemedi.')
        )
  );
}

function* onAddPaymentCard() {
  yield takeLatest(paymentActions.requestAddPaymentCard.type, addPaymentCard);
}

function* deletePaymentCard(action: PayloadAction<number>): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, 'url', action.payload);
  return yield put(
    response.successful
      ? paymentActions.successDeletePaymentCard()
      : paymentActions.errorDeletePaymentCard(
          getErrorMessage(response, 'İstenilen kart bilgisi silinemedi.')
        )
  );
}

function* onDeletePaymentCard() {
  yield takeLatest(
    paymentActions.requestDeletePaymentCard.type,
    deletePaymentCard
  );
}

export default [onLoadPaymentMap, onAddPaymentCard, onDeletePaymentCard];
