import { UserAuthTypes } from '../types';


interface GetUser {
	type: UserAuthTypes.GET_USER;
	payload: object;
}
interface FollowUser {
	type: UserAuthTypes.FOLLOW_USER;
	payload: object | string;
}
interface UnfollowUser {
	type: UserAuthTypes.UNFOLLOW_USER;
	payload: object | string;
}

export type UserTypesActions =  GetUser |FollowUser | UnfollowUser;
