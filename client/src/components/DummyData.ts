import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Geraldine Keen',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'Raymond Maxwell',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Hanna Clark',
		},
		{
			id: 4,
			profilePicture: images.ProfileIcon,
			username: 'Elizabeth Johnson',
		},
	],
};

export const Posts: PostLists = {
	posts: [
		{
			post_id: 1,
			desc: 'Love for all, Hatred for none!!!',
			photo: images.PostOne,
			date: '13 days ago',
			userId: 1,
			likes: [],
			comment: 60,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '20 mins ago',
			userId: 2,
			likes: 92,
			comment: 35,
		},
		{
			post_id: 3,
			desc: 'Hello. Welcome to my world',
			photo: images.PostThree,
			date: '19 mins ago',
			userId: 3,
			likes: 18,
			comment: 18,
		},
		{
			post_id: 4,
			desc: 'Happy new year everyone...',
			photo: images.PostFour,
			date: '50 mins ago',
			userId: 4,
			likes: 9,
			comment: 74,
		},
	],
};
