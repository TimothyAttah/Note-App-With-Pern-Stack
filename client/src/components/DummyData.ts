import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
	userLists: [
		{
			id: 1,
			profilePicture: images.Alex,
			username: 'Victor Kaka',
		},
		{
			id: 2,
			profilePicture: images.Mary,
			username: 'Peter Parker',
		},
		{
			id: 3,
			profilePicture: images.JaneDoe,
			username: 'Sandra Lily',
		},
		{
			id: 4,
			profilePicture: images.ProfileIcon,
			username: 'Caleb Great',
		},
	],
};

export const Posts: PostLists = {
	posts: [
		{
			post_id: 1,
			desc: 'Love for all, Hatred for none...',
			photo: images.PostOne,
			date: '43 mins ago',
			userId: 1,
			likes: [],
			comment: 9,
		},
		{
			post_id: 2,
			photo: images.PostTwo,
			date: '5 days ago',
			userId: 2,
			likes: 4,
			comment: 87,
		},
		{
			post_id: 3,
			desc: 'This is amazingly great',
			photo: images.PostThree,
			date: '10 mins ago',
			userId: 3,
			likes: 35,
			comment: 158,
		},
		{
			post_id: 4,
			desc: 'Happy new year everyone',
			photo: images.PostFour,
			date: '20 mins ago',
			userId: 4,
			likes: 75,
			comment: 8,
		},
	],
};
