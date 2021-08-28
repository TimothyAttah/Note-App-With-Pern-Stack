import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import { Posts } from '../DummyData';
import { Share } from '../share/Share';
import { Post } from '../post/Post';
import { allPosts } from '../../redux/actions/posts';
// import { Posts } from '../DummyData';
import { StoreState } from '../../redux/reducers';

const FeedContainer = styled.div`
	flex: 5.5;
	padding: 20px;
	@media (max-width: 800px) {
		flex: 2;
	}
`;

export const Feed = () => {
	const dispatch = useDispatch();
	const { posts } = useSelector((state: StoreState) => state.posts);
	useEffect(() => {
		dispatch(allPosts());
	}, [dispatch]);

	console.log('This is feed post', posts);
	

	return (
		<FeedContainer>
			<Share />
			{/* {posts.map(p => {
				return <Post key={p._id} post={p} />;
			})} */}
			{posts.map(post => (
				<Post key={post._id} post={post} />
			))}
		</FeedContainer>
	);
};
