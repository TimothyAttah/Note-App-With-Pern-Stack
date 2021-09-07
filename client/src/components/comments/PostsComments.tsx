import React, { FC, useEffect } from 'react';
// import { Divider } from '@material-ui/core';
import styled from 'styled-components';
// import { images } from '../Images';
import { PostList } from '../../redux/InterfaceRedux';
import { CommentsForm } from '../forms/PostCommentsForm';
import { PostCommentLists } from './PostCommentLists';
import { useDispatch } from 'react-redux';
import { allPostComment } from '../../redux/actions/posts';
import { user } from '../NameInitials';
interface CommentProps {
  post: PostList;
}

const CommentsBox = styled.div`
	border: 2px solid red;
	margin-top: 20px;
	display: flex;
`;

const Comments = styled.div`
	padding: 20px;
	/* height: calc(50vh - 100px); */
	height: 200px;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgb(179, 179, 179);
	}
	h5 {
		margin: 10px 0;
	}
`;

export const PostsComments: FC<CommentProps> = ({ post }) => {
	 const dispatch = useDispatch();
		useEffect(() => {
			dispatch(allPostComment(post?._id));
		}, [dispatch, post?._id]);
	
	// 	const { posts } = useSelector((state: StoreState) => state.posts);
	// console.log(posts);
	
	return (
		<CommentsBox>
			<div style={{maxWidth: '350px', width: '100%'}}>
				<h5 style={{padding: '10px'}}>Recent comments</h5>
				<Comments>
					{post ? (
						post.comments.map(item => {
							console.log(item);

							return (
								<PostCommentLists
									key={item._id}
									text={item.text}
									commentId={item._id}
									firstName={user?.firstName}
									lastName={user?.lastName}
									profilePicture={user?.profilePicture}
								/>
							);
						})
					) : (
						<h2>loading...</h2>
					)}
					{/* <h4 className='view'>View more comments...</h4> */}
				</Comments>
			</div>
			<CommentsForm post={post} />
		</CommentsBox>
	);
};
