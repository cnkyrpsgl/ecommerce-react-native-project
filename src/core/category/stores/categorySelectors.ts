import {CategoryState} from './categoryTypes';

interface AppState {
  categoryState: CategoryState;
}

export default ({categoryState}: AppState) => categoryState;
