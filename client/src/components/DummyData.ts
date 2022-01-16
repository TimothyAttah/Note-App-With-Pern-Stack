import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Naomi Mac',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'Diana Thorn',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Hanna Mitchell',
		},
		{
			id: 4,
			profilePicture: images.ProfileIcon,
			username: 'Joe Black',
		},
	],
};

export const Posts: PostLists = {
	posts: [
		{
			post_id: 88,
			desc: 'Love for all, Hatred for none!!!',
			photo: images.PostOne,
			date: '5 days ago',
			userId: 1,
			likes: [],
			comment: 35,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '1 mins ago',
			userId: 2,
			likes: 24,
			comment: 6,
		},
		{
			post_id: 3,
			desc: 'Whats sup!!! people Welcome to my world!!!',
			photo: images.PostThree,
			date: '16 mins ago',
			userId: 3,
			likes: 36,
			comment: 53,
		},
		{
			post_id: 4,
			desc: 'Happy new year folks!!!',
			photo: images.PostFour,
			date: '2 hours ago',
			userId: 4,
			likes: 84,
			comment: 73
		},
	],
};
