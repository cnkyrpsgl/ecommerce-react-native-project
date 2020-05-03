import {combineReducers} from 'redux';
import {categoryReducer} from '../category/stores';
import {campaignReducer} from '../campaign/stores';
import {searchReducer} from '../search/stores';
import {cartReducer} from '../cart/stores';
import {identityReducer} from '../identity/stores';
import {addressReducer} from '../address/stores';
import {paymentReducer} from '../payment/stores';
import {historyReducer} from '../history/stores';

const rootReducer = combineReducers({
  categoryState: categoryReducer,
  campaignState: campaignReducer,
  searchState: searchReducer,
  cartState: cartReducer,
  identityState: identityReducer,
  addressState: addressReducer,
  paymentState: paymentReducer,
  historyState: historyReducer
});

export default rootReducer;
