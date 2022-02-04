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
      id: 3,
      profilePicture: images.JaneDoe,
      username: 'Anthony Johnson',
    },
    {
      id: 4,
      profilePicture: images.ProfileIcon,
      username: 'Carol White',
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
      post_id: 4,
      desc: 'Whats sup!!! people Welcome to my world!!!',
      photo: images.PostThree,
      date: '16 mins ago',
      userId: 3,
      likes: 50,
      comment: 123,
    },
  ],
};
