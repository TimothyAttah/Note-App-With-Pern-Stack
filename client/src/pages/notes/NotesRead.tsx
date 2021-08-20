import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { notesLists } from '../../redux/actions/notes';
import { StoreState } from '../../redux/reducers';
import { Avatar, Button, Divider} from '@material-ui/core';
import { Person, ThumbUp } from '@material-ui/icons';
import moment from 'moment';

import {
  NotesContainer,
  NotesLeft,
  NotesLeftBottom,
  NotesReadContainer,
  NotesRight
 } from './NotesReadStyles';


export const NotesRead = () => {
  const dispatch = useDispatch();
  const { noteId } = useParams<any>();
  useEffect(() => {
    dispatch(notesLists())
  }, [dispatch]);

  const note = useSelector((state: StoreState) => noteId !== null ? state.notes.notes.find(note => note._id === noteId) : null);
  return (
		<NotesReadContainer>
			{note ? (
				<NotesContainer>
					<NotesLeft className='note__left'>
						<Link to='/users/profile/username'>
							{note.profilePicture ? (
								<Avatar>
									<img src={note.profilePicture} alt='' />
								</Avatar>
							) : (
								<Avatar>
									<Person />
								</Avatar>
							)}
						</Link>
						<h2>
							<Link to='/users/profile/username'>{note.name}</Link>
						</h2>
						<h4>jane@gmail.com</h4>
						<small className='top__date'>
							{moment(note.createdAt).format('llll')}
						</small>
						<Divider />
						<div style={{marginTop: '30px'}}>
							<Link to='/users/profile/username'>
								<Button variant='contained' color='secondary'>More From</Button>
              </Link>
              <NotesLeftBottom>
                <Avatar><ThumbUp /></Avatar>
                24 likes
                {/* <IconButton><ThumbUp/></IconButton> */}
              </NotesLeftBottom>
              <NotesLeftBottom>
                300 comments
              </NotesLeftBottom>
						</div>
					</NotesLeft>
					<NotesRight className='note__right'>
            <h1>{note.title}</h1>
            <Divider />
						<p>{note.content}</p>
					</NotesRight>
				</NotesContainer>
			) : (
				<h2>Loading...</h2>
			)}
		</NotesReadContainer>
	);
}
