import {OperationState} from '../../redux';
import {ImageSourcePropType} from 'react-native';

export interface CategoryItem {
  categoryName: string;
  urlSource: ImageSourcePropType;
}

export interface CategoryState extends OperationState {
  categories: CategoryItem[];
}
