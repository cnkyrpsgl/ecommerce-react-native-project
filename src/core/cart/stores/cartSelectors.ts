import {CartState} from './cartTypes';

interface AppState {
  cartState: CartState;
}

export default ({cartState}: AppState) => cartState;
