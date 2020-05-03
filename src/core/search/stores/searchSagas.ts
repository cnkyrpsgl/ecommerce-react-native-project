import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import searchActions from './searchActions';

function* getPopularSearches(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? searchActions.successGetPopularSearches(response.data)
      : searchActions.errorGetPopularSearches(
          getErrorMessage(
            response,
            'İstenilen popüler ürün bilgisi bulunamadı.'
          )
        )
  );
}

function* onGetPopularSearches() {
  yield takeLatest(
    searchActions.requestGetPopularSearches.type,
    getPopularSearches
  );
}

export default [onGetPopularSearches];
