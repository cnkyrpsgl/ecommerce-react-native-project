import {OperationState} from '../../redux';

export interface Card {
  cardName: string;
  cardNumber: string;
  ownerName: string;
  month: number;
  year: number;
}

export interface PaymentMap {
  [id: number]: Card;
}

export interface PaymentCardRequest {
  card: Card;
  id: number;
}

export interface PaymentState extends OperationState {
  paymentMap: PaymentMap;
}
