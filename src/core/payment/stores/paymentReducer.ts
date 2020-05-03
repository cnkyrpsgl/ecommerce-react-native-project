import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import paymentActions from './paymentActions';
import {PaymentCardRequest, PaymentMap, PaymentState} from './paymentTypes';
import {paymentData} from '../../../modules/profile/constants';

const initialState: PaymentState = {
  // TODO: Change payment source to backend
  paymentMap: paymentData
};

const paymentReducer = createReducer(initialState, {
  // LOAD PAYMENT MAP

  [paymentActions.requestLoadPaymentMap.type]: (state: PaymentState) => {
    state.loading = true;
  },
  [paymentActions.successLoadPaymentMap.type]: (
    state: PaymentState,
    action: PayloadAction<PaymentMap>
  ) => {
    state.loading = false;
    state.paymentMap = action.payload;
  },
  [paymentActions.errorLoadPaymentMap.type]: (
    state: PaymentState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  // ADD PAYMENT CARD

  [paymentActions.requestAddPaymentCard.type]: (state: PaymentState) => {
    state.loading = true;
  },
  [paymentActions.successAddPaymentCard.type]: (
    state: PaymentState,
    action: PayloadAction<PaymentCardRequest>
  ) => {
    state.loading = false;
    state.paymentMap[action.payload.id] = action.payload.card;
  },
  [paymentActions.errorAddPaymentCard.type]: (
    state: PaymentState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  // DELETE PAYMENT CARD

  [paymentActions.requestDeletePaymentCard.type]: (state: PaymentState) => {
    state.loading = true;
  },
  [paymentActions.successDeletePaymentCard.type]: (state: PaymentState) => {
    state.loading = false;
  },
  [paymentActions.errorDeletePaymentCard.type]: (
    state: PaymentState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default paymentReducer;
