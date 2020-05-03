import {OperationState} from '../../redux';
import {ImageSourcePropType} from 'react-native';

interface CartProduct {
  productName: string;
  unitPrice: number;
  amount: number;
  imageSource: ImageSourcePropType;
}

export interface Cart {
  [sku: string]: CartProduct;
}

export interface CartState extends OperationState {
  cart: Cart;
}
