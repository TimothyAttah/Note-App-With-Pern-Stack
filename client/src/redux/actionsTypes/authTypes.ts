import { UsersTypes } from '../types';

interface SignupUser {
  type: UsersTypes.SIGN_UP;
  payload: object
}

interface SigninUser {
  type: UsersTypes.SIGN_UP;
  payload: object
}

interface GetUser {
  type: UsersTypes.GET_USER;
  payload: object
}

interface LogoutUser {
  type: UsersTypes.LOGOUT;
  payload: object
}

export type AuthTypesActions = SigninUser | SignupUser | GetUser | LogoutUser