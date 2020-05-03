import {createAction} from '@reduxjs/toolkit';
import {SearchItem} from './searchTypes';

const searchActions = {
  requestGetPopularSearches: createAction<void>('GET_POPULAR_SEARCHES_REQUEST'),
  successGetPopularSearches: createAction<SearchItem[]>(
    'GET_POPULAR_SEARCHES_SUCCESS'
  ),
  errorGetPopularSearches: createAction<string>('GET_POPULAR_SEARCHES_ERROR')
};

export default searchActions;
