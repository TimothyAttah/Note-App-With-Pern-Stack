import { Posts } from '../InterfaceRedux';
import { PostTypes } from '../types';
import { PostActionTypes } from '../actionsTypes/postTypes';
import { v4 } from 'uuid';

const initialState: Posts = {
	posts: [
		{
			_id: v4(),
			createdAt: new Date(),
			img: '',
			userId: '',
			likes: [],
			postedBy: {
				_id: '',
				coverPicture: '',
				createdAt: '',
				email: 'tim@gmail.com',
				firstName: 'Tim',
				followers: [],
				following: [],
				isAdmin: true,
				lastName: 'Doe',
				profilePicture: '',
			},
			comments: [	],
		},
	],
};

export const posts = (state = initialState, action: PostActionTypes) => {
	switch (action.type) {
		case PostTypes.POST_CREATE:
			return {
				...state,
				posts: [action.payload, ...state.posts],
			};
		case PostTypes.POSTS_LISTS:
			return {
				...state,
				posts: action.payload,
			};
		case PostTypes.POST_LIKE:
			return {
				...state,
				posts: state.posts.map(post =>
					post._id === action.payload._id ? action.payload : post
				),
			};
		case PostTypes.POST_COMMENT:
			return {
				...state,
			//	posts: state.posts.map(post =>
				// 	post._id === action.payload._id
				// 		? { ...post, comments: [...post.comments, action.payload.data] }
				// 		: post
				// ),
				posts: state.posts.map(post =>
					post._id === action.payload._id ? action.payload : post
				),
      };
    case PostTypes.DELETE_COMMENT:
     	return {
				...state,
				// posts: state.posts.map(post => ({
				// 	...post,
				// 	comments: post.comments.filter(
				// 		comment => comment._id !== action.payload
				// 	),
				// })),
          
				posts: state.posts.filter(post => post._id !== action.payload),
			};
		default:
			return state;
	}
};
