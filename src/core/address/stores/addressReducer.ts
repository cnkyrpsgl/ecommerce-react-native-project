import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {AddressMap, AddressRequest, AddressState} from './addressTypes';
import addressActions from './addressActions';
import {addressData} from '../../../modules/profile/constants';

const initialState: AddressState = {
  // TODO: Change cart source to backend
  addressMap: addressData
};

const addressReducer = createReducer(initialState, {
  [addressActions.requestLoadAddressMap.type]: (state: AddressState) => {
    state.loading = true;
  },
  [addressActions.successLoadAddressMap.type]: (
    state: AddressState,
    action: PayloadAction<AddressMap>
  ) => {
    state.loading = false;
    state.addressMap = action.payload;
  },
  [addressActions.errorLoadAddressMap.type]: (
    state: AddressState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
    state.addressMap = {};
  },

  [addressActions.requestUpsertAddress.type]: (state: AddressState) => {
    state.loading = true;
  },
  [addressActions.successUpsertAddress.type]: (
    state: AddressState,
    action: PayloadAction<AddressRequest>
  ) => {
    state.loading = false;
    state.addressMap[action.payload.id] = action.payload.address;
  },
  [addressActions.errorUpsertAddress.type]: (
    state: AddressState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  [addressActions.requestDeleteAddress.type]: (state: AddressState) => {
    state.loading = true;
  },
  [addressActions.successDeleteAddress.type]: (state: AddressState) => {
    state.loading = false;
  },
  [addressActions.errorDeleteAddress.type]: (
    state: AddressState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default addressReducer;
