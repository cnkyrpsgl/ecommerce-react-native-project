import {OperationState} from '../../redux';

export enum AddressType {
  home = 'Home',
  work = 'Work'
}

export interface Address {
  title: string;
  detail: string;
}

export interface AddressRequest {
  address: Address;
  id: number;
}

export interface AddressMap {
  [id: number]: Address;
}

export interface AddressState extends OperationState {
  addressMap: AddressMap;
}
