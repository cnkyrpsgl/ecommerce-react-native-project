import {OperationState} from '../../redux';
import {AddressType} from '../../address/stores/addressTypes';

export interface Order {
  date: string;
  skuAmount: number;
  cartPrice: number;
  addressType: AddressType;
}

export interface OrderMap {
  [id: number]: Order;
}

export interface HistoryState extends OperationState {
  orderMap: OrderMap;
}
