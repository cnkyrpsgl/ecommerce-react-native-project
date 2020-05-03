import {OperationState} from '../../redux';

export interface SearchItem {
  name: string;
}

export interface SearchState extends OperationState {
  popularSearches: SearchItem[];
}
