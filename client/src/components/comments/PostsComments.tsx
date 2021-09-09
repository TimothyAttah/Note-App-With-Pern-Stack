import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
// import { Divider } from '@material-ui/core';
import styled from 'styled-components';
// import { images } from '../Images';
import { PostList } from '../../redux/InterfaceRedux';
import { CommentsForm } from '../forms/PostCommentsForm';
import { PostCommentLists } from './PostCommentLists';
import { useDispatch } from 'react-redux';
import { allPostComment, postComments } from '../../redux/actions/posts';
import { Avatar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
interface CommentProps {
  post: PostList;
}

const CommentsBox = styled.div`
	/* border: 2px solid red; */
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

const Form = styled.form`
	display: flex;
	width: 100%;
	padding-top: 20px;
	.icon-image {
		padding: 0px 10px;
	}
	input {
		width: 100%;
		height: 100px;
		padding: 10px;
		outline: none;
		border: 1px solid gray;
		background-color: #fff;
		font-size: 1.1rem;
		::placeholder {
			color: grey;
			font-weight: bold;
		}
	}
	button {
		display: none;
	}
`;

export const PostsComments: FC<CommentProps> = ({ post }) => {
	const dispatch = useDispatch();
	const commentsRef = useRef<any>();
		const [text, setText] = useState('');
		// useEffect(() => {
		// 	dispatch(allPostComment(post?._id));
		// }, [dispatch, post?._id]);
	
	// 	const { posts } = useSelector((state: StoreState) => state.posts);
	// console.log(posts);
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newComments = {
			date: Date.now(),
			text
		}


		dispatch(postComments(post?._id, newComments));
		commentsRef.current.scrollIntoView({behavior: 'smooth'})
		setText('');
	};


	return (
		<CommentsBox>
			<div style={{ maxWidth: '380px', width: '100%' }}>
				<h5 style={{ padding: '10px' }}>Recent comments</h5>
				<Comments>
					{post ? (
						post.comments.map(item => {
							console.log(item);
							return (
								<div key={item._id}>
									<PostCommentLists
										text={item.text.text}
										commentId={item._id}
										firstName={item.postedBy?.firstName}
										lastName={item.postedBy?.lastName}
										profilePicture={item.postedBy?.profilePicture}
									  date={item.text?.date}
									/>
								</div>
							);
						})
					
					) : (
						// post.comments.map(item => (

						// 	<div>
						// 		<PostCommentLists
						// 			key={item._id}
						// 			text={item.text}
						// 			commentId={item._id}
						// 			firstName={user?.firstName}
						// 			lastName={user?.lastName}
						// 			profilePicture={user?.profilePicture}
						// 		/>
						// 		<div ref={commentsRef} />
						// 	</div>
						// ))
						<h2>loading...</h2>
					)}
					{/* <h4 className='view'>View more comments...</h4> */}
					<div ref={commentsRef} />
				</Comments>
			</div>
			<Form onSubmit={handleSubmit}>
				<div className='icon-image'>
					<Avatar>
						<Person />
					</Avatar>
				</div>
				<input
					placeholder='Write a comment...'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<button type='submit'></button>
			</Form>
			{/* <CommentsForm commentsRef={commentsRef} post={post} /> */}
		</CommentsBox>
	);
};
