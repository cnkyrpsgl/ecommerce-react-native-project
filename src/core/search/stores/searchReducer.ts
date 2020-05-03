import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import searchActions from './searchActions';
import {SearchItem, SearchState} from './searchTypes';
import {popularData} from '../../../modules/search/constants';

const initialState: SearchState = {
  // TODO: Change search source to backend
  popularSearches: popularData
};

const searchReducer = createReducer(initialState, {
  [searchActions.requestGetPopularSearches.type]: (state: SearchState) => {
    state.loading = true;
  },
  [searchActions.successGetPopularSearches.type]: (
    state: SearchState,
    action: PayloadAction<SearchItem[]>
  ) => {
    state.loading = false;
    state.popularSearches = action.payload;
  },
  [searchActions.errorGetPopularSearches.type]: (
    state: SearchState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default searchReducer;
