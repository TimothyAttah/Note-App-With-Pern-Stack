import { FC } from 'react';
import { Avatar, Divider } from '@material-ui/core';
import { Delete, Person, ThumbUp } from '@material-ui/icons';
import styled from 'styled-components';
// import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePostComments } from '../../redux/actions/posts';
import moment from 'moment';

interface CommentsListsProps {
	// name: string;
	date:  Date | string | undefined;
	profilePicture: string;
	text: string | object;
  commentId: string;
  firstName: string;
  lastName: string
}

const CommentsContainer = styled.div`
	padding: 20px 10px;
	max-width: 380px;
	width: 100%;
	margin-bottom: 20px;
	box-shadow: -5px -5px 5px #fff7, 5px 5px 5px #0002;
`;

const CommentsTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 5px;
	h4 {
		margin-left: 5px;
		font-size: 14px;
	}
	.MuiSvgIcon-root {
		font-size: 16px;
	}
	.MuiAvatar-root {
		width: 30px;
		height: 30px;
	}
	img {
		width: 100%;
		object-fit: cover;
	}
	small {
		margin-left: 10px;
		font-size: 11px;
		padding-top: 2px;
		display: flex;
		align-items: center;
		font-style: italic;
	}
	@media (max-width: 300px) {
		h4 {
			font-size: 0.6rem;
			/* margin-left: 5px; */
		}
		small {
			font-size: 8px;
			margin-right: 20px;
			font-weight: bold;
		}
	}
`;

const CommentsCenter = styled.div`
	p {
		margin-left: 20px;
		margin-top: 5px;
	}
`;

const CommentsBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
	.MuiSvgIcon-root {
		font-size: 14px;
	}
	.likes {
		display: flex;
		align-items: center;

		span {
			margin: 0 5px;
		}
	}
`;

export const PostCommentLists: FC<CommentsListsProps> = ({
	text,
  commentId,
  profilePicture,
  lastName,
	firstName,
	date
}) => {
  const dispatch = useDispatch();
  const fullName = `${firstName} ${lastName}`
	return (
		<CommentsContainer>
			<CommentsTop>
				<CommentsTop>
					{profilePicture ? (
						<Avatar>
							<img src={profilePicture} alt='' />
						</Avatar>
					) : (
						// <Avatar>{nameToInitials({name})}</Avatar>
						<Avatar>
							<Person />
						</Avatar>
					)}
					<h4>{fullName}</h4>
					<small>{moment(date).fromNow()}</small>
				</CommentsTop>
				<div className='delete-icon'>
					<Delete
						color='secondary'
						titleAccess='Delete'
						onClick={() => dispatch(deletePostComments(commentId))}
					/>
				</div>
			</CommentsTop>
			<Divider />
			<CommentsCenter>
				<p>{text}</p>
			</CommentsCenter>
			{/* <Divider /> */}
			<CommentsBottom>
				<h5 className='likes'>
					<ThumbUp color='primary' />
					<span>12 </span> Likes
				</h5>
				<h5>Reply .</h5>
			</CommentsBottom>
		</CommentsContainer>
	);
};
