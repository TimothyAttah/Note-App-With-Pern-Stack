import { PostLists, UserLists } from '../Interface';
import { images } from './images';

export const Users: UserLists = {
  userLists: [
    {
      id: 1,
      profilePicture: images.Alex,
      username: 'Falz Chike',
    },
    {
      id: 2,
      profilePicture: images.Mary,
      username: 'Simi Meka',
    },
    {
      id: 4,
      profilePicture: images.Naruto,
      username: 'Anthony Johnson',
    },
    {
      id: 5,
      profilePicture: images.Alex,
      username: 'Sylvester Jon',
    },
    {
      id: 6,
      profilePicture: images.JaneDoe,
      username: 'Alice Johnson',
    },
  ],
};

export const Posts: PostLists = {
  posts: [
    {
      post_id: 88,
      desc: 'Love for all, Hatred for none!!!',
      photo: images.PostOne,
      date: '10 days ago',
      userId: 1,
      likes: [],
      comment: 39,
    },
    {
      post_id: 4,
      desc: 'Welcome to my page!!!',
      photo: images.PostFour,
      date: '2 hours ago',
      userId: 388,
      likes: 900,
      comment: 12,
    },
    {
      post_id: 5,
      desc: 'Happy new month people!',
      photo: images.PostFive,
      date: '1 mins ago',
      userId: 39,
      likes: 98,
      comment: 138,
    },
    {
      post_id: 6,
      desc: 'Confucius is a great teacher!',
      photo: images.PostSix,
      date: '1 mins ago',
      userId: 39,
      likes: 98,
      comment: 138,
    },
  ],
};
