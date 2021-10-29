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
			date: '1 days ago',
			userId: 1,
			likes: [],
			comment: 6,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '27 mins ago',
			userId: 2,
			likes: 9,
			comment: 3,
		},
		{
			post_id: 3,
			desc: 'Hi. Welcome to my world',
			photo: images.PostThree,
			date: '17 mins ago',
			userId: 3,
			likes: 8,
			comment: 8,
		},
		{
			post_id: 4,
			desc: 'Happy new month friends...',
			photo: images.PostFour,
			date: '5 hours ago',
			userId: 4,
			likes: 17,
			comment: 7,
		},
	],
};
