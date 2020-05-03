import {createAction} from '@reduxjs/toolkit';
import {AddressMap, AddressRequest} from './addressTypes';

const addressActions = {
  requestLoadAddressMap: createAction<void>('LOAD_ADDRESS_MAP_REQUEST'),
  successLoadAddressMap: createAction<AddressMap>('LOAD_ADDRESS_MAP_SUCCESS'),
  errorLoadAddressMap: createAction<string>('LOAD_ADDRESS_MAP_ERROR'),

  requestUpsertAddress: createAction<AddressRequest>('UPSERT_ADDRESS_REQUEST'),
  successUpsertAddress: createAction<AddressRequest>('UPSERT_ADDRESS_SUCCESS'),
  errorUpsertAddress: createAction<string>('UPSERT_ADDRESS_ERROR'),

  requestDeleteAddress: createAction<number>('DELETE_ADDRESS_REQUEST'),
  successDeleteAddress: createAction<void>('DELETE_ADDRESS_SUCCESS'),
  errorDeleteAddress: createAction<string>('DELETE_ADDRESS_ERROR')
};

export default addressActions;
