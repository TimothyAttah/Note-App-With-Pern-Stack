import {  User } from '../InterfaceRedux';
import { UserAuthTypes} from '../types';
import { UserTypesActions } from '../actionsTypes/userTypes';

const initialState: User = {
	user: [],
};

export const user = (state = initialState, action: UserTypesActions) => {
	switch (action.type) {
		
		case UserAuthTypes.GET_USER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};
