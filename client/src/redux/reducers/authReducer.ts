import { UsersTypes } from '../types';
import { IUser, InitialUser } from '../Interface';
import { AuthTypesActions } from '../actionsTypes/authTypes';

const initialUser: InitialUser = {
  users: []
}

const authReducer = (state = initialUser, action: AuthTypesActions) => {
  switch (action.type) {
    case UsersTypes.SIGN_UP:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;
