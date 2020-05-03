import {takeLatest, put, call} from 'redux-saga/effects';
import {getErrorMessage, getRequest, postRequest} from '../../api/api';
import {SagaIterator} from 'redux-saga';
import cartActions from './cartActions';
import {PayloadAction} from '@reduxjs/toolkit';

function* getCartProducts(): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(getRequest, 'url');
  return yield put(
    response.successful
      ? cartActions.successGetCartProducts(response.data)
      : cartActions.errorGetCartProducts(
          getErrorMessage(response, 'İstenilen sepet bilgisi bulunamadı.')
        )
  );
}

function* onGetCartProducts() {
  yield takeLatest(cartActions.requestGetCartProducts.type, getCartProducts);
}

function* updateCartProduct(action: PayloadAction<number>): SagaIterator {
  // TODO: Change url related to backend
  const response = yield call(postRequest, `url/${action.payload}`);
  return yield put(
    response.successful
      ? cartActions.successUpdateCartProduct()
      : cartActions.errorUpdateCartProduct(
          getErrorMessage(
            response,
            `Sepetteki ${action.payload} numaralı ürün güncellenirken bir hata oluştu.`
          )
        )
  );
}

function* onUpdateCartProduct() {
  yield takeLatest(cartActions.requestGetCartProducts.type, updateCartProduct);
}

export default [onGetCartProducts, onUpdateCartProduct];
