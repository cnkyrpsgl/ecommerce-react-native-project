import {AddressState} from './addressTypes';

interface AppState {
  addressState: AddressState;
}

export default ({addressState}: AppState) => addressState;
