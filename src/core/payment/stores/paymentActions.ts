import {createAction} from '@reduxjs/toolkit';
import {PaymentCardRequest, PaymentMap} from './paymentTypes';

const paymentActions = {
  requestLoadPaymentMap: createAction<void>('LOAD_PAYMENT_MAP_REQUEST'),
  successLoadPaymentMap: createAction<PaymentMap>('LOAD_PAYMENT_MAP_SUCCESS'),
  errorLoadPaymentMap: createAction<string>('LOAD_PAYMENT_MAP_ERROR'),

  requestAddPaymentCard: createAction<PaymentCardRequest>(
    'ADD_PAYMENT_CARD_REQUEST'
  ),
  successAddPaymentCard: createAction<PaymentCardRequest>(
    'ADD_PAYMENT_CARD_SUCCESS'
  ),
  errorAddPaymentCard: createAction<string>('ADD_PAYMENT_CARD_ERROR'),

  requestDeletePaymentCard: createAction<number>('DELETE_PAYMENT_CARD_REQUEST'),
  successDeletePaymentCard: createAction<void>('DELETE_PAYMENT_CARD_SUCCESS'),
  errorDeletePaymentCard: createAction<string>('DELETE_PAYMENT_CARD_ERROR')
};

export default paymentActions;
