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
		{
			id: 5,
			profilePicture: images.JaneDoe,
			username: 'Naomi Mac',
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
			date: '5 mins ago',
			userId: 2,
			likes: 34,
			comment: 8,
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
			desc: 'Whats sup!!! people Welcome to my world!!!',
			photo: images.PostThree,
			date: '16 mins ago',
			userId: 3,
			likes: 50,
			comment: 123,
		},
		{
			post_id: 5,
			desc: 'HAPPY NEW YEAR... Have a nice day',
			photo: images.PostFive,
			date: '1 hour ago',
			userId: 4,
			likes: 1000,
			comment: 210
		},
		{
			post_id: 6,
			desc: 'HAPPY NEW YEAR... Have a nice day',
			photo: images.PostSix,
			date: '1 mins ago',
			userId: 4,
			likes: 100,
			comment: 67
		},
	],
};
