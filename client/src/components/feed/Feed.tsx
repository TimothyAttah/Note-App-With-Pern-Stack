import React, { FC, useEffect, useState } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import { Posts } from '../DummyData';
import { Share } from '../share/Share';
import { Post } from '../post/Post';
import { allPosts, myPosts } from '../../redux/actions/posts';
// import { Posts } from '../DummyData';
import { StoreState } from '../../redux/reducers';
import { useParams } from 'react-router-dom';
import { getUser } from '../../redux/actions/auth';


interface FeedProps {
	profile?: boolean;
}

const FeedContainer = styled.div`
	flex: 5.5;
	padding: 20px;
	@media (max-width: 800px) {
		flex: 2;
	}
`;





export const Feed: FC<FeedProps> = ({ profile }) => {
	
	const dispatch = useDispatch();

	const HomeFeed = () => {
		useEffect(() => {
			dispatch(allPosts());
		}, [dispatch]);
		
		const { posts } = useSelector((state: StoreState) => state.posts);

		return (
		<FeedContainer>
			<Share />
			{posts?.map(post => (
				<Post key={post._id} post={post} />
			))}
		</FeedContainer>
	);
	}
	
	const ProfileFeed = () => {
		const { id } = useParams<any>();
		const [userProfile, setUserProfile] = useState(null)
		useEffect(() => {
			if (id) {
				dispatch(getUser(id));
			} else {
				dispatch(myPosts());
			}
		}, [dispatch, id]);

			const { posts } = useSelector((state: StoreState) => state.posts);
	const {auth} = useSelector((state: StoreState)=> state.auth)
		console.log(auth.posts);

		const listsPosts = () => {
			if (id) {
				// console.log(auth);
				
				posts?.map(post => <Post key={post._id} post={post} />);
			} else {
					posts?.map(post => (
				<Post key={post._id} post={post} />
			))
			}
		}
		
		return (
		<FeedContainer>
				<Share />
			
			{/* {posts?.map(post => (
				<Post key={post._id} post={post} />
			))} */}
				{listsPosts()}
		</FeedContainer>
	);
	}


	return (
		<>
				{profile ? <ProfileFeed /> : <HomeFeed />}
		</>
	)
};


