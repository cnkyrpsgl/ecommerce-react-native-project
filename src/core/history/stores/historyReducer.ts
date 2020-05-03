import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {HistoryState, OrderMap} from './historyTypes';
import historyActions from './historyActions';
import {orderHistoryData} from '../../../modules/profile/constants';

const initialState: HistoryState = {
  // TODO: Change history source to backend
  orderMap: orderHistoryData
};

const historyReducer = createReducer(initialState, {
  [historyActions.requestLoadOrderHistory.type]: (state: HistoryState) => {
    state.loading = true;
  },
  [historyActions.successLoadOrderHistory.type]: (
    state: HistoryState,
    action: PayloadAction<OrderMap>
  ) => {
    state.loading = false;
    state.orderMap = action.payload;
  },
  [historyActions.errorLoadOrderHistory.type]: (
    state: HistoryState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default historyReducer;
