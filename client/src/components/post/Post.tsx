import { useEffect, useState, FC } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { ThumbUp, Person, ThumbDown } from '@material-ui/icons';
// import { format } from 'timeago.js';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { user } from '../NameInitials';
import { likePost } from '../../redux/actions/posts';

import {
	PostBottomLeft,
	PostBottomRight,
	PostCenter,
	PostContainer,
	PostTopLeft,
	PostWrapper,
} from './styles';
import axios from 'axios';
import { PostList } from '../../redux/InterfaceRedux';
import { Popup } from '../nav/Popup';
import { PostsComments } from '../comments/PostsComments';
import { PostComments } from '../comments/CommentsOpen';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

interface PostProps {
  post: PostList
}

export const Post: FC<PostProps> = ({ post }) => {
	// console.log(post);
	
	const dispatch = useDispatch();
	const [like, setLike] = useState(post.likes?.length);
	const [isLiked, setIsLiked] = useState<any>(false);

	useEffect(() => {
		setIsLiked(post.likes?.includes(user._id));
	}, [setIsLiked, post.likes]);

	// const posts = useSelector(state => postId !== null ? state.posts.posts.find(post => post._id): null)
	const likeHandler = async () => {
		// dispatch(likePost(post._id, {userId: user?._id}))
		
		try {
			await axios.put(`/posts/${post._id}/like`, { userId: user?._id });
		} catch (err) {
			console.log(err);
		}
		setLike(isLiked > 0 ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	const fullName = `${post.postedBy?.firstName} ${post.postedBy?.lastName}`;

	return (
		<PostContainer>
			<PostWrapper>
				<PostTopLeft>
					{post.postedBy?.profilePicture ? (
						<Avatar>
							<img
								src={`${PF}/${post?.img}`}
								alt=''
								className='share__profile-img'
							/>
						</Avatar>
					) : (
						<Person />
					)}
					<span className='post__username'>{fullName}</span>
					<span className='post__date'>
						{moment(post.createdAt).format('llll')}
					</span>
				</PostTopLeft>
				<div>{post.postedBy?._id === user?._id && <Popup post={post} />}</div>
			</PostWrapper>
			<PostCenter>
				<span>{post?.desc}</span>
				<img src={`${PF}/${post?.img}`} alt='' />
			</PostCenter>
			<PostWrapper>
				<PostBottomLeft>
					{isLiked ? (
						<IconButton className='red__icon' onClick={likeHandler}>
							<ThumbDown htmlColor='white' />
						</IconButton>
					) : (
						<IconButton className='blue__icon' onClick={likeHandler}>
							<ThumbUp htmlColor='white' />
						</IconButton>
					)}

					<span className='post__like-counter'>{like} people like it</span>
				</PostBottomLeft>
			</PostWrapper>
			<PostBottomRight>
				{/* <span>{post.comments?.length} comments</span> */}
				<PostComments post={post} comments={<PostsComments post={post} />} />
			</PostBottomRight>
		</PostContainer>
	);
};
