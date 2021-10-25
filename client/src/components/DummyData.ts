import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Linus Thomas',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'John Caleb',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Andrew Triggers',
		},
		{
			id: 4,
			profilePicture: images.ProfileIcon,
			username: 'Stuart Little',
		},
	],
};

export const Posts: PostLists = {
	posts: [
		{
			post_id: 1,
			desc: 'Love for all, Hatred for none!!!',
			photo: images.PostOne,
			date: '10 days ago',
			userId: 1,
			likes: [],
			comment: 150,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '5 days ago',
			userId: 2,
			likes: 58,
			comment: 45,
		},
		{
			post_id: 3,
			desc: 'This is amazingly great, I love it.',
			photo: images.PostThree,
			date: '15 mins ago',
			userId: 3,
			likes: 12,
			comment: 188,
		},
		{
			post_id: 4,
			desc: 'Happy new year everyone...',
			photo: images.PostFour,
			date: '50 mins ago',
			userId: 4,
			likes: 45,
			comment: 24,
		},
	],
};
