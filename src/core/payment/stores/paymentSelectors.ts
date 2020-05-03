import {PaymentState} from './paymentTypes';

interface AppState {
  paymentState: PaymentState;
}

export default ({paymentState}: AppState) => paymentState;
