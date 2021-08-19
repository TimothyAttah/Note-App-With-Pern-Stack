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
import { Notes } from './Notes';
import { noteDelete } from '../../redux/actions/notes';

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
  p .name{
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


export const NotesDelete = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams<any>();
  const notes = useSelector((state: StoreState) => noteId !== null ? state.notes.notes.find(note => note._id === noteId) : null);

  const handleDelete = (id: string | number) => {
    dispatch(noteDelete(id))
    history.push('/users/notes')
  }

  return (
		<NoteDeleteContainer>
      <Backdrop close={() => history.push('/users/notes')} />
      <Notes />
			<Modal>
				<Header className='header'>
					<Header className='header__primary'>
						<Delete />
						<p>Delete Old Notes</p>
					</Header>
					<IconButton onClick={() => history.push('/users/notes')}>
						<Close />
					</IconButton>
				</Header>
				<Divider />
				<Content className='content'>
					{notes ? (
						<>
							<p>
								<span className='name'>{notes.name}</span>
								<span> are you sure you want to delete this note?</span>
							</p>
							<h4>{notes.title}</h4>
						</>
					) : (
						<h3>Please select a post to delete</h3>
					)}
				</Content>
				<Divider />
				{notes ? (
					<ButtonContainer>
						<Button
							variant='contained'
							size='small'
							color='secondary'
							startIcon={<Close />}
							onClick={() => history.push('/users/notes')}
						>
							No
						</Button>
						<Button
							variant='contained'
							size='small'
							style={{ backgroundColor: green[800], color: '#fff' }}
							startIcon={<Check />}
							onClick={() => handleDelete(notes._id)}
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
}
