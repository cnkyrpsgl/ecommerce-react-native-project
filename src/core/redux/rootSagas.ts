import {EnhancedStore} from '@reduxjs/toolkit';
import {SagaMiddleware, Saga} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';
import {categorySagas} from '../category/stores';
import {campaignSagas} from '../campaign/stores';
import {searchSagas} from '../search/stores';
import {cartSagas} from '../cart/stores';
import {identitySagas} from '../identity/stores';
import {addressSagas} from '../address/stores';
import {paymentSagas} from '../payment/stores';
import {historySagas} from '../history/stores';

const rootSagas: Saga[][] = [
  categorySagas,
  campaignSagas,
  searchSagas,
  cartSagas,
  identitySagas,
  addressSagas,
  paymentSagas,
  historySagas
];

export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

function createAbortableSaga(saga: Saga) {
  if (process.env.NODE_ENV === 'development') {
    return function* main() {
      const sagaTask = yield fork(saga);

      yield take(CANCEL_SAGAS_HMR);
      yield cancel(sagaTask);
    };
  } else {
    return saga;
  }
}

const SagaManager = {
  startSagas(sagaMiddleware: SagaMiddleware) {
    rootSagas.forEach((s) =>
      s
        .map(createAbortableSaga)
        .forEach((saga: Saga) => sagaMiddleware.run(saga))
    );
  },

  cancelSagas(store: EnhancedStore) {
    store.dispatch({
      type: CANCEL_SAGAS_HMR
    });
  }
};

export default SagaManager;
