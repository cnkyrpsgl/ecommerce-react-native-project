import {createAction} from '@reduxjs/toolkit';
import {Cart} from './cartTypes';

const cartActions = {
  requestGetCartProducts: createAction<void>('GET_CART_PRODUCTS_REQUEST'),
  successGetCartProducts: createAction<Cart>('GET_CART_PRODUCTS_SUCCESS'),
  errorGetCartProducts: createAction<string>('GET_CART_PRODUCTS_ERROR'),

  requestUpdateCartProduct: createAction<number>('UPDATE_CART_PRODUCT_REQUEST'),
  successUpdateCartProduct: createAction<void>('UPDATE_CART_PRODUCT_SUCCESS'),
  errorUpdateCartProduct: createAction<string>('UPDATE_CART_PRODUCT_ERROR')
};

export default cartActions;
