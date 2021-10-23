import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Ben Gates',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'Joseph Caleb',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Lori Triggers',
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
			desc: 'Love for all, Hatred for none...',
			photo: images.PostOne,
			date: '5 days ago',
			userId: 1,
			likes: [],
			comment: 100,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '5 days ago',
			userId: 2,
			likes: 55,
			comment: 45,
		},
		{
			post_id: 3,
			desc: 'This is amazingly great, i love it.',
			photo: images.PostThree,
			date: '12 mins ago',
			userId: 3,
			likes: 78,
			comment: 148,
		},
		{
			post_id: 4,
			desc: 'Happy new year everyone!!!',
			photo: images.PostFour,
			date: '50 mins ago',
			userId: 4,
			likes: 45,
			comment: 24,
		},
	],
};
