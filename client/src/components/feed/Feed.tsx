import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Share } from '../share/Share';
import { Post } from '../post/Post';
import { allPosts, myPosts } from '../../redux/actions/posts';
import { StoreState } from '../../redux/reducers';
import { useParams } from 'react-router-dom';
import { PostList } from '../../redux/InterfaceRedux';
import { user } from '../NameInitials';

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
		}, []);
		const { posts } = useSelector((state: StoreState) => state.posts);
		return (
			<FeedContainer>
				<Share />
				{posts?.map(post => (
					<Post key={post._id} post={post} />
				))}
			</FeedContainer>
		);
	};

	const ProfileFeed = () => {
		const { id } = useParams<any>();
		const [userProfile, setUserProfile] = useState<any>();
		useEffect(() => {
			if (id) {
				fetch(`/users/${id}/user`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + localStorage.getItem('jwt'),
					},
				})
					.then(res => res.json())
					.then(data => {
						if (data.error) {
							console.log(data.error);
						} else {
							setUserProfile(data);
						}
					})
					.catch(err => {
						console.log(err);
					});
			} else {
				dispatch(myPosts());
			}
		}, [id]);

		console.log('user profile', userProfile);

		const { posts } = useSelector((state: StoreState) => state.posts);

		return (
			<FeedContainer>
				{/* {userProfile?.user._id !== user._id && <Share />} */}
				{!userProfile && <Share />}

				{userProfile
					? userProfile?.posts?.map((post: PostList) => (
							<Post key={post._id} post={post} />
					  ))
					: posts?.map((post: PostList) => <Post key={post._id} post={post} />)}
			</FeedContainer>
		);
	};

	return <>{profile ? <ProfileFeed /> : <HomeFeed />}</>;
};
