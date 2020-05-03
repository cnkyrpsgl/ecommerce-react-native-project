import {OperationState} from '../../redux';
import {AddressType} from '../../address/stores/addressTypes';

export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface IdentityState extends OperationState {
  user: User;
  loggedIn: boolean;
}
