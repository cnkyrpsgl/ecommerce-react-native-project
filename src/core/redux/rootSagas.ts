import {EnhancedStore} from '@reduxjs/toolkit';
import {SagaMiddleware, Saga} from 'redux-saga';
import {cancel, fork, take} from 'redux-saga/effects';

const rootSagas: Saga[][] = [];

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
