import {createAction} from '@reduxjs/toolkit';
import {CategoryItem} from './categoryTypes';

const categoryActions = {
  requestGetCategories: createAction<void>('GET_CATEGORIES_REQUEST'),
  successGetCategories: createAction<CategoryItem[]>('GET_CATEGORIES_SUCCESS'),
  errorGetCategories: createAction<string>('GET_CATEGORIES_ERROR')
};

export default categoryActions;
