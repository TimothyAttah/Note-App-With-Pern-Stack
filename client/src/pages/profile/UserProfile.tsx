import React, { FC, useEffect, useState } from 'react';
import { Person } from '@material-ui/icons';
import { Avatar, Fab, Divider, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SideBar } from '../../components/sidebar/SideBar';
import { images } from '../../components/images';
import { myPosts } from '../../redux/actions/posts';
import { followUser, unfollowUser } from '../../redux/actions/user';
import { useParams } from 'react-router-dom';
import { RightBar } from '../../components/rightbar/RightBar';
import { Feed } from '../../components/feed/Feed';
import { user } from '../../components/NameInitials';
import axios from 'axios';

const ProfileContainer = styled.div`
	margin-top: 120px;
	display: flex;
`;
const ProfileRight = styled.div`
	flex: 9;
`;
const ProfileCover = styled.div`
	height: 410px;
	position: relative;
	img {
		width: 100%;
		height: 350px;
		background-size: cover;
	}
	.profile__user-img,
	.MuiAvatar-root {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		top: 250px;
		border: 3px solid #fff;
		.MuiSvgIcon-root {
			font-size: 100px;
		}
	}
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`;

const ProfileInfoPrimary = styled.div`
	width: 600px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 10px;
	.MuiFab-root {
		margin-right: 10px;
	}
	@media (max-width: 600px) {
		width: 90%;
	}
	@media (max-width: 320px) {
		font-size: 15px;
	}
`;

export const UserProfile: FC = () => {
	
	const [userProfile, setUserProfile] = useState<any>();
	const [showFollow, setShowFollow] = useState(
	user ? !user.following?.includes(userProfile?.user._id) : true
	);
		// const [followed, setFollowed] = useState(
		// 	user.followings?.includes(userProfile?.user._id)
		// );
	const dispatch = useDispatch();
	const { id } = useParams<any>();
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
	}, [dispatch, id]);


	// useEffect(() => {
	// 	setFollowed();
	// }, [userProfile?.user._id]);
	
	console.log(user);
	

	
	const handleClick = async () => {
		// try { 
		// 	if (followed) {
		// 		dispatch(unfollowUser(`${userProfile?.user._id}`,  user._id));
		// 		// await axios.put(`/users/${userProfile?.user._id}/follow`, {
		// 		// 	userId: user._id
		// 		// });
		// 	} else {
		// 		// await axios.put(`/users/${userProfile?.user._id}/unfollow`, {
		// 			// 	userId: user._id
		// 			// });
		// 		dispatch(followUser(`${userProfile?.user._id}`, user._id));
		// 	}
		// } catch (err) {
		// 	console.log(err);
		// }
		// setFollowed(!followed)
	}

	// console.log('ff', followed);





	const followUser = () => {
		fetch(`/users/follow`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({ followId: id }),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				localStorage.setItem('user', JSON.stringify(data.results));
				setUserProfile((prevState:any) => {
					return {
						...prevState,
						user: {
							...prevState.user,
							followers: [...prevState.user.followers, data._id],
						},
					};
				});
				setShowFollow(false);
			})
			.catch(err => {
				console.log(err);
			});
	};





	const unFollowUser = () => {
		fetch(`/users/unfollow`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({ unfollowId: id }),
		})
			.then(res => res.json())
			.then(data => {
				localStorage.setItem('user', JSON.stringify(data.results));
				setUserProfile((prevState:any) => {
					const newFollower = prevState.user.followers.filter(
						(item:any) => item !== data._id
					);
					return {
						...prevState,
						user: {
							...prevState.user,
							followers: newFollower,
						},
					};
				});
				setShowFollow(true);
				//  window.location.reload( false );
			})
			.catch(err => {
				console.log(err);
			});
	};









	
	
	const name = `${userProfile?.user?.firstName} ${userProfile?.user?.lastName}`;
	return (
		<ProfileContainer>
			<SideBar />
			<ProfileRight>
				<div className='profile_right-top'>
					<ProfileCover>
						<img
							src={
								userProfile?.user?.coverPicture
									? userProfile?.user?.coverPicture
									: images.PostOne
							}
							alt=''
							className='profile__cover-img'
						/>

						{userProfile?.user?.profilePicture ? (
							<img
								src={userProfile?.user?.profilePicture}
								alt=''
								className='profile__user-img'
							/>
						) : (
							<Avatar>
								<Person />
							</Avatar>
						)}
					</ProfileCover>
					<ProfileInfo>
						<h1 className='profile__info-name'>{name}</h1>
						<h4>{userProfile?.user?.email}</h4>
						<span className='profile__info-desc'>
							Wow welcome to my profile
						</span>
						{/* <span className='profile__info-desc'>{user.results?.desc}</span> */}
					</ProfileInfo>
					<Divider />
					<ProfileInfoPrimary>
						<h4>
							<span>
								<Fab color='secondary'>{userProfile?.posts.length}</Fab>
							</span>
							Posts
						</h4>

						<h4>
							<span>
								<Fab color='secondary'>
									{userProfile?.user.followers?.length}
								</Fab>
							</span>
							Followers
						</h4>
						<h4>
							<span>
								<Fab color='secondary'>
									{userProfile?.user.followings?.length}
								</Fab>
							</span>
							Following
						</h4>
						<div>
							{showFollow ? (
								<Button
									variant='contained'
									color='primary'
									onClick={() => followUser()}
								>
									Follow
								</Button>
							) : (
								<Button
									variant='contained'
									color='primary'
									onClick={() => unFollowUser()}
								>
									Unfollow
								</Button>
							)}

							{/* <Button variant='contained' color='primary' onClick={handleClick}>
								{followed ? 'Unfollow' : 'Follow'}
							</Button> */}
						</div>
					</ProfileInfoPrimary>
				</div>
				<ProfileContainer>
					<Feed profile />
					<RightBar profile />
				</ProfileContainer>
			</ProfileRight>
		</ProfileContainer>
	);
};
