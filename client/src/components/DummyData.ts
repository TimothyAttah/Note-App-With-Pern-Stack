import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Beatrice Golden',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'Dwayne Maxwell',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Hanna Hanna',
		},
		{
			id: 4,
			profilePicture: images.ProfileIcon,
			username: 'Mathilda Johnson',
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
			likes: 4,
			comment: 61,
		},
		{
			post_id: 3,
			desc: 'Whats sup!!! Welcome to my world!!!',
			photo: images.PostThree,
			date: '16 mins ago',
			userId: 3,
			likes: 80,
			comment: 88,
		},
		{
			post_id: 4,
			desc: 'Happy new month folks!!!',
			photo: images.PostFour,
			date: '810 hours ago',
			userId: 4,
			likes: 78,
			comment: 4,
		},
	],
};
