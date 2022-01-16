import { FC, useEffect, useState } from 'react';
import { images } from '../images';
import { Users } from '../DummyData';
import { Online } from '../online/Online';
import { Cake, Person } from '@material-ui/icons';
import {
	RightBarContainer,
	RightBarContainerWrapper,
	BirthDayContainer,
	ProfileRightBarContainer,
	RightBarInfoItem,
	RightBarFollowing,
	RightBarFollowings,
	RightBarInfo,
} from './Styles';
import axios from 'axios';
import { user } from '../NameInitials';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface RightBarProps {
	profile?: boolean;
}

export const RightBar: FC<RightBarProps> = ({ profile }) => {
	const [friends, setFriends] = useState([]);
	useEffect(() => {
		const getFriends = async () => {
			try {
				const friendList = await axios.get(`/users/friends/${user._id}`);
				setFriends(friendList.data);
			} catch (err) {
				console.log(err);
			}
		};
		getFriends();
	}, []);
	const HomeRightBar = () => {
		return (
			<RightBarContainerWrapper>
				<BirthDayContainer>
					<div>
						<Cake />
					</div>
					<span>
						<b>Kyle Thompson</b> and {''}
						<b>3 other friends</b> have a birthday today.
					</span>
				</BirthDayContainer>
				<img src={images.PostFour} alt='' className='rightbar__img' />
				<h4>Online Friends</h4>
				<ul>
					{Users.userLists.map(u => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</RightBarContainerWrapper>
		);
	};

	const ProfileRightBar = () => {
		return (
			<ProfileRightBarContainer>
				<h4>User Information</h4>
				<RightBarInfo>
					<RightBarInfoItem>
						<span className='rightbar__info-key'>City:</span>
						<span className='rightbar__info-value'>Lagos</span>
					</RightBarInfoItem>
					<RightBarInfoItem>
						<span className='rightbar__info-key'>From:</span>
						<span className='rightbar__info-value'>Nigeria</span>
					</RightBarInfoItem>
					<RightBarInfoItem>
						<span className='rightbar__info-key'>Relationship:</span>
						<span className='rightbar__info-value'>Single</span>
					</RightBarInfoItem>
				</RightBarInfo>
				<h4 className='rightbar__title-profile'>User Friends</h4>

				<RightBarFollowings>
					{friends.length ? (
						friends.map((friend: any) => (
							<Link to={`/users/${user._id}/user/profile`}>
								<RightBarFollowing>
									{friend.profilePicture ? (
										<img src={friend.profilePicture} alt='' />
									) : (
										<Avatar>
											<Person />
										</Avatar>
									)}
									<span>{`${friend.firstName} ${friend.lastName}`}</span>
								</RightBarFollowing>
							</Link>
						))
					) : (
						<h3>You have no friends yet</h3>
					)}
				</RightBarFollowings>
			</ProfileRightBarContainer>
		);
	};
	return (
		<RightBarContainer>
			{profile ? <ProfileRightBar /> : <HomeRightBar />}
		</RightBarContainer>
	);
};
