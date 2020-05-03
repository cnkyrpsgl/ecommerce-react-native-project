import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {IdentityState, User} from './identityTypes';
import identityActions from './identityActions';

const guest = {
  id: 0,
  name: '',
  lastName: '',
  email: '',
  phoneNumber: ''
};

const initialState: IdentityState = {
  // TODO: Change identity source to backend
  user: {
    id: 12345,
    name: 'Jeff',
    lastName: 'Bezos',
    email: 'jeff.bezos@amazon.com',
    phoneNumber: '12678462671'
  },
  loggedIn: true
};

const identityReducer = createReducer(initialState, {
  [identityActions.requestLogin.type]: (state: IdentityState) => {
    state.loading = true;
  },
  [identityActions.successLogin.type]: (
    state: IdentityState,
    action: PayloadAction<User>
  ) => {
    state.loading = false;
    state.user = action.payload;
  },
  [identityActions.errorLogin.type]: (
    state: IdentityState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  [identityActions.requestLogout.type]: (state: IdentityState) => {
    state.loading = true;
  },
  [identityActions.successLogout.type]: (state: IdentityState) => {
    state.loading = false;
    state.user = guest;
  },
  [identityActions.errorLogout.type]: (
    state: IdentityState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  },

  [identityActions.requestUpdateUser.type]: (state: IdentityState) => {
    state.loading = true;
  },
  [identityActions.successUpdateUser.type]: (
    state: IdentityState,
    action: PayloadAction<User>
  ) => {
    state.loading = false;
    state.user = action.payload;
  },
  [identityActions.errorUpdateUser.type]: (
    state: IdentityState,
    action: PayloadAction<string>
  ) => {
    state.loading = false;
    state.error = action.payload;
  }
});

export default identityReducer;
