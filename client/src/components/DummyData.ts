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
			date: '3 days ago',
			userId: 1,
			likes: [],
			comment: 10,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '45 mins ago',
			userId: 2,
			likes: 2,
			comment: 31,
		},
		{
			post_id: 3,
			desc: 'Whats sup!!! Welcome to my world!!!',
			photo: images.PostThree,
			date: '12 mins ago',
			userId: 3,
			likes: 8,
			comment: 8,
		},
		{
			post_id: 4,
			desc: 'Happy new month friends!!!',
			photo: images.PostFour,
			date: '8 hours ago',
			userId: 4,
			likes: 8,
			comment: 6,
		},
	],
};
