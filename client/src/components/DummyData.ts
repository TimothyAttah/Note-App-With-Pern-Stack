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
			date: '18 days ago',
			userId: 1,
			likes: [],
			comment: 30,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '10 mins ago',
			userId: 2,
			likes: 8,
			comment: 62,
		},
		{
			post_id: 3,
			desc: 'Whats sup!!! Welcome to my world!!!',
			photo: images.PostThree,
			date: '18 mins ago',
			userId: 3,
			likes: 30,
			comment: 58,
		},
		{
			post_id: 4,
			desc: 'Happy new month folks!!!',
			photo: images.PostFour,
			date: '810 hours ago',
			userId: 4,
			likes: 18,
			comment: 3
		},
	],
};
