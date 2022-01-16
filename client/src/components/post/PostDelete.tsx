import React from 'react';
import styled from 'styled-components';
import { Close, Delete, Check } from '@material-ui/icons';
import { Divider, IconButton, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { green } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../../components/modal/Modal';
import { Backdrop } from '../../components/Backdrop';
import history from '../../history';
import { StoreState } from '../../redux/reducers';
import { Home } from '../../pages/home/Home';
import { deletePost } from '../../redux/actions/posts';

const NoteDeleteContainer = styled.div`
	margin-top: 150px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Content = styled.div`
	padding: 30px 0;
	text-align: center;
	p .name {
		font-weight: bolder;
		font-style: italic;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 30px;
	padding-bottom: 10px;
	button {
		margin-left: 15px;
	}
`;

export const PostDelete = () => {
	const dispatch = useDispatch();
	const { postId } = useParams<any>();
  
  const posts = useSelector((state:StoreState)=> postId !== null ? state.posts.posts.find(post => post.comments.filter(comment => comment._id !== postId)): null)

	const handleDelete = (id: string | undefined) => {
		dispatch(deletePost(id));
		history.push('/');
	};

	return (
		<NoteDeleteContainer>
			<Backdrop close={() => history.push('/')} />
			<Home />
			<Modal>
				<Header className='header'>
					<Header className='header__primary'>
						<Delete />
						<p>Delete Old Notes</p>
					</Header>
					<IconButton onClick={() => history.push('/')}>
						<Close />
					</IconButton>
				</Header>
				<Divider />
				<Content className='content'>
					{posts ? (
						<>
							<h4> Are you sure you want to delete this post?</h4>
						</>
					) : (
						<h3>Please select a post to delete</h3>
					)}
				</Content>
				<Divider />
				{posts ? (
					<ButtonContainer>
						<Button
							variant='contained'
							size='small'
							color='secondary'
							startIcon={<Close />}
							onClick={() => history.push('/')}
						>
							No
						</Button>
						<Button
							variant='contained'
							size='small'
							style={{ backgroundColor: green[800], color: '#fff' }}
							startIcon={<Check />}
							onClick={() => handleDelete(posts?._id)}
						>
							Yes
						</Button>
					</ButtonContainer>
				) : (
					''
				)}
			</Modal>
		</NoteDeleteContainer>
	);
};
