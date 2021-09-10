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
	} catch (err) {
		if (err.response && err.response.data) {
			toast.error(err.response.data.error);
		}
	}
};
