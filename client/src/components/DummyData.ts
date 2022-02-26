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
    // {
    //   id: 3,
    //   profilePicture: images.JaneDoe,
    //   username: 'Anthony Johnson',
    // },
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
      desc: 'Whats sup!!! people Welcome to my page!!!',
      photo: images.PostThree,
      date: '1 hour ago',
      userId: 38,
      likes: 90,
      comment: 123,
    },
  ],
};
