import {createAction} from '@reduxjs/toolkit';
import {OrderMap} from './historyTypes';

const historyActions = {
  requestLoadOrderHistory: createAction<void>('LOAD_ORDER_HISTORY_REQUEST'),
  successLoadOrderHistory: createAction<OrderMap>('LOAD_ORDER_HISTORY_SUCCESS'),
  errorLoadOrderHistory: createAction<string>('LOAD_ORDER_HISTORY_ERROR')
};

export default historyActions;
