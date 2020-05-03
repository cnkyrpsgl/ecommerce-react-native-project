import {SearchState} from './searchTypes';

interface AppState {
  searchState: SearchState;
}

export default ({searchState}: AppState) => searchState;
