import React, { FC, ReactNode, useEffect } from 'react'
import { Person } from '@material-ui/icons';
import { Avatar, Fab, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SideBar } from '../sidebar/SideBar';
import { user, fullName } from '../NameInitials';
import { images } from '../images';
<<<<<<< HEAD
// import { listPost } from '../../redux/actions/posts';
=======
import { myPosts } from '../../redux/actions/posts';
import { StoreState } from '../../redux/reducers';
>>>>>>> User-Feature

interface ProfileMenuProps {
  children: ReactNode;
}

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

export const ProfileMenu:FC<ProfileMenuProps> = ({children}) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(myPosts())
	}, [dispatch])
	
	const { posts } = useSelector((state: StoreState) => state.posts)
	
  return (
		<ProfileContainer>
			<SideBar />
			<ProfileRight>
				<div className='profile_right-top'>
					<ProfileCover>
						<img
							src={user?.coverPicture ? user?.coverPicture : images.PostOne}
							alt=''
							className='profile__cover-img'
						/>

						{user?.profilePicture ? (
							<img
								src={user?.profilePicture}
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
						<h1 className='profile__info-name'>{fullName}</h1>
						<h4>{user?.email}</h4>
						<span className='profile__info-desc'>
							Wow welcome to my profile
						</span>
						{/* <span className='profile__info-desc'>{user.results?.desc}</span> */}
					</ProfileInfo>
					<Divider />
					<ProfileInfoPrimary>
						<h4>
							<span>
								<Fab color='secondary'>{posts.length}</Fab>
							</span>
							Posts
						</h4>

						<h4>
							<span>
								<Fab color='secondary'>{user.followers?.length}</Fab>
							</span>
							Followers
						</h4>
						<h4>
							<span>
								<Fab color='secondary'>{user.followings?.length}</Fab>
							</span>
							Following
						</h4>
					</ProfileInfoPrimary>
				</div>
<<<<<<< HEAD
        <ProfileContainer>
          {children}
=======
				<ProfileContainer>
					{children}
>>>>>>> User-Feature
				</ProfileContainer>
			</ProfileRight>
		</ProfileContainer>
	);
}
