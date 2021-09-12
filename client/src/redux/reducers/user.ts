import { User, UserList, AuthUserList } from '../InterfaceRedux';
import { UserAuthTypes } from '../types';
import { UserTypesActions } from '../actionsTypes/userTypes';

const initialState: User = {
	user: {
		user: {
			_id: '',
			firstName: '',
			lastName: '',
			email: '',
			profilePicture: '',
			createdAt: '',
			coverPicture: '',
			followers: [],
			followings: []
		},
	
		posts:[]
		// posts: {
		// 	_id: '',
		// 	desc: '',
		// 	img: '',
		// 	createdAt: '',
		// 	userId: '',
		// 	likes: [],
		// 	comments: [],
		// 	postedBy: {
		// 		_id: '',
		// 		coverPicture: '',
		// 		createdAt: '',
		// 		email: '',
		// 		firstName: '',
		// 		followers: [],
		// 		following: [],
		// 		isAdmin: false,
		// 		lastName: '',
		// 		profilePicture: '',
		// 	},
		// },
	},
};

export const user = (state = initialState, action: UserTypesActions) => {
	switch (action.type) {
		case UserAuthTypes.GET_USER:
			return {
				...state,
				user: action.payload,
			};
		case UserAuthTypes.FOLLOW_USER:
			return {
				...state,
				user: {
					...state.user.user, followings: [...state.user.user.followings, action.payload],
				}
			}; 
		case UserAuthTypes.UNFOLLOW_USER:
			return {
				...state,
				user: {
					...state.user.user, followings: state.user.user.followings.filter(following => following !== action.payload)
				}
			}; 
		default:
			return state;
	}
};
