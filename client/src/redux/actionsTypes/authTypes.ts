import { UserTypes } from "../types";

interface SignUp {
  type: UserTypes.SIGN_UP;
  payload: object;
}

interface SignIn {
  type: UserTypes.SIGN_IN;
  payload: object;
}

interface SignOut {
  type: UserTypes.SIGN_OUT;
  payload: object | string;
}

export type AuthTypesActions = SignUp | SignIn | SignOut;