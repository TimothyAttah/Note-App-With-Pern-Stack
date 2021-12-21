import { UserAuthTypes } from '../types';
import * as api from '../api';
import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { UserTypesActions } from '../actionsTypes/userTypes';

export const getUser = (id: string) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.getUser(id);
		console.log(data);

		dispatch<UserTypesActions>({
			type: UserAuthTypes.GET_USER,
			payload: data,
		});
	} catch (err:any) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};
export const followUser = (id: string, userId:object | string) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.followUser(id, userId);
		console.log(data);

		dispatch<UserTypesActions>({
			type: UserAuthTypes.FOLLOW_USER,
			payload: userId,
		});
	} catch (err:any) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};

export const unfollowUser = (id: string, userId:object | string) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.unfollowUser(id, userId);
		console.log(data);

		dispatch<UserTypesActions>({
			type: UserAuthTypes.UNFOLLOW_USER,
			payload: userId,
		});
	} catch (err:any) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};
