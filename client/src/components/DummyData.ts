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
      desc: 'Welcome to my page!',
      photo: images.PostTwo,
      date: '2 days ago',
      userId: 388,
      likes: 90,
      comment: 172,
    },
    {
      post_id: 3,
      desc: 'This is  my third post!',
      photo: images.PostThree,
      date: '1 mins ago',
      userId: 46,
      likes: 0,
      comment: 2,
    },
    {
      post_id: 5,
      desc: 'Working my way up!',
      photo: images.PostFour,
      date: '1 mins ago',
      userId: 369,
      likes: 98,
      comment: 368,
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
