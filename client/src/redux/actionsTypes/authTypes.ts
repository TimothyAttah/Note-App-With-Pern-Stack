import { UserTypes } from '../types';

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

interface GetUsers {
	type: UserTypes.GET_USERS;
	payload: object;
}
interface GetUser {
	type: UserTypes.GET_USER;
	payload: object;
}

export type AuthTypesActions = SignUp | SignIn | SignOut | GetUsers | GetUser;
