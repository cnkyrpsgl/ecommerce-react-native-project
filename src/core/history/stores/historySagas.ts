import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import historyActions from './historyActions';

function* loadOrderHistory(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? historyActions.successLoadOrderHistory(response.data)
      : historyActions.errorLoadOrderHistory(
          getErrorMessage(response, 'İstenilen sipariş geçmişi bulunamadı.')
        )
  );
}

function* onLoadOrderHistory() {
  yield takeLatest(
    historyActions.requestLoadOrderHistory.type,
    loadOrderHistory
  );
}

export default [onLoadOrderHistory];
