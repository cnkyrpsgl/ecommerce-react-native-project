import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Cart, CartState} from './cartTypes';
import cartActions from './cartActions';
import {cartData} from '../../../modules/cart/constants';

const initialState: CartState = {
  // TODO: Change cart source to backend
  cart: cartData
};

const cartReducer = createReducer(initialState, {
  [cartActions.requestGetCartProducts.type]: (state: CartState) => {
    state.loading = true;
  },
  [cartActions.successGetCartProducts.type]: (
    state: CartState,
    action: PayloadAction<Cart>
  ) => {
    state.loading = false;
    state.cart = action.payload;
  },
  [cartActions.errorGetCartProducts.type]: (
    state: CartState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  [cartActions.requestUpdateCartProduct.type]: (state: CartState) => {
    state.loading = true;
  },
  [cartActions.successUpdateCartProduct.type]: (state: CartState) => {
    state.loading = false;
  },
  [cartActions.errorUpdateCartProduct.type]: (
    state: CartState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default cartReducer;
