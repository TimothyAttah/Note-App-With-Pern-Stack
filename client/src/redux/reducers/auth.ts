import { Auth } from "../InterfaceRedux";
import { UserTypes } from "../types";
import { AuthTypesActions } from "../actionsTypes/authTypes";

const initialState: Auth = {
  auth: []
}

export const auth = (state = initialState, action: AuthTypesActions) => {
  switch (action.type) {
    case UserTypes.SIGN_UP:
    case UserTypes.SIGN_IN:
      return {
        ...state,
        auth: [action.type, ...state.auth]
      }
    case UserTypes.GET_USERS:
      case UserTypes.GET_USER:
      return {
        ...state,
        auth: action.payload
      }
    default:
      return state
  }
}