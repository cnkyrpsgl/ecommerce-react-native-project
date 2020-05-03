import categoryActions from './categoryActions';
import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';

function* getCategories(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? categoryActions.successGetCategories(response.data)
      : categoryActions.errorGetCategories(
          getErrorMessage(response, 'İstenilen kategori bilgisi bulunamadı.')
        )
  );
}

function* onGetCategories() {
  yield takeLatest(categoryActions.requestGetCategories.type, getCategories);
}

export default [onGetCategories];
