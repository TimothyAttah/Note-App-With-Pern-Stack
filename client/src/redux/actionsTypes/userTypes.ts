import { UserAuthTypes } from '../types';


interface GetUser {
	type: UserAuthTypes.GET_USER;
	payload: object;
}

export type UserTypesActions =  GetUser;
