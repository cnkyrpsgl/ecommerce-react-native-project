import {createAction} from '@reduxjs/toolkit';
import {User} from './identityTypes';

const identityActions = {
  requestLogin: createAction<void>('LOGIN_REQUEST'),
  successLogin: createAction<User>('LOGIN_SUCCESS'),
  errorLogin: createAction<string>('LOGIN_ERROR'),

  requestLogout: createAction<void>('LOGOUT_REQUEST'),
  successLogout: createAction<void>('LOGOUT_SUCCESS'),
  errorLogout: createAction<string>('LOGOUT_ERROR'),

  requestUpdateUser: createAction<User>('UPDATE_USER_REQUEST'),
  successUpdateUser: createAction<User>('UPDATE_USER_SUCCESS'),
  errorUpdateUser: createAction<string>('UPDATE_USER_ERROR')
};

export default identityActions;
