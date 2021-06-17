import { UsersTypes } from '../types';
import { InitialUser } from '../Interface';
import { AuthTypesActions } from '../actionsTypes/authTypes';

const initialUser: InitialUser = {
  users: []
}

const authReducer = (state = initialUser, action: AuthTypesActions) => {
  switch (action.type) {
    case UsersTypes.SIGN_UP:
    case UsersTypes.SIGN_IN:
      return {
        ...state,
        users: action.payload
      }
    case UsersTypes.GET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default authReducer;
