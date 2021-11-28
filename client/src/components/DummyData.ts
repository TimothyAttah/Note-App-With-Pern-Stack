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
			post_id: 1,
			desc: 'Love for all, Hatred for none!!!',
			photo: images.PostOne,
			date: '8 days ago',
			userId: 1,
			likes: [],
			comment: 3,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '14 mins ago',
			userId: 2,
			likes: 21,
			comment: 6,
		},
		{
			post_id: 3,
			desc: 'Whats sup!!! people Welcome to my world!!!',
			photo: images.PostThree,
			date: '1 mins ago',
			userId: 3,
			likes: 3,
			comment: 5,
		},
		{
			post_id: 4,
			desc: 'Happy new year folks!!!',
			photo: images.PostFour,
			date: '2 hours ago',
			userId: 4,
			likes: 8,
			comment: 7
		},
	],
};
