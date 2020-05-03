import {CategoryItem, CategoryState} from './categoryTypes';
import {categoryData} from '../../../modules/home/constants';
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import categoryActions from './categoryActions';

const initialState: CategoryState = {
  // TODO: Change category source to backend
  categories: categoryData
};

const categoryReducer = createReducer(initialState, {
  [categoryActions.requestGetCategories.type]: (state: CategoryState) => {
    state.loading = true;
  },
  [categoryActions.successGetCategories.type]: (
    state: CategoryState,
    action: PayloadAction<CategoryItem[]>
  ) => {
    state.loading = false;
    state.categories = action.payload;
  },
  [categoryActions.errorGetCategories.type]: (
    state: CategoryState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default categoryReducer;
