import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import { format, TDate } from 'timeago.js';
import moment from "moment";
import { ThumbUp, Person } from '@material-ui/icons';

import { notesLists } from "../../redux/actions/notes";
import { StoreState } from "../../redux/reducers";
import { ReadMore } from "../../components/ReadMore";
import {
  NoteBottom,
  NoteCenter,
  NoteCenterBottom,
  NoteContainer,
  NoteContainerPrimary,
	NoteTop,
	NoteComments
} from './NotesListStyles';
import { Popup } from "../../components/nav/Popup";
import { Comment } from "../../components/comments/Comments";
import { CommentsOpen } from "../../components/comments/CommentsOpen";


export const NotesLists: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notesLists())
  }, [dispatch]);
  const {notes} = useSelector((state: StoreState) => state.notes);
  console.log(notes);

  return (
		<>
			{notes.length ? (
				notes.map(note => (
					<NoteContainer key={note._id}>
						<NoteContainerPrimary className='notes__container'>
							<NoteTop className='notes__top'>
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
								<h3>
									<Link to='/users/profile/username'>{note.name}</Link>
								</h3>
								<h5>100 Followers</h5>
							</NoteTop>
							<NoteCenter className='note__center'>
								<h2>{note.title}</h2>
								{/* <small className='top__date'>
									{format(note.createdAt as TDate)}
								</small> */}
								<small className='top__date'>
									{moment(note.createdAt).format('llll')}
								</small>

								<Divider />
								<ReadMore>{note.content}</ReadMore>
								<NoteCenterBottom className='note__center-button'>
									<Link to={`/users/notes/${note._id}/note/read`}>
										<Button variant='contained'>Read More</Button>
									</Link>
									<small>{moment(note.createdAt).format('llll')}</small>
									<Popup note={note} />
								</NoteCenterBottom>
								<Divider />
								<NoteBottom>
									<NoteBottom className='note__bottom-primary'>
										<Avatar>
											<ThumbUp />
										</Avatar>
										<h4>45 likes</h4>
									</NoteBottom>
									{/* <div className='note__bottom-comments'>
										<h4>123 Comments</h4>
									</div> */}
									{/* <NoteComments className='note__bottom-comments'>
										<Comment note={note} />
									</NoteComments> */}
								</NoteBottom>
							</NoteCenter>
						</NoteContainerPrimary>
						{/* <NoteBottom>
							<NoteBottom className='note__bottom-likes'>
								<IconButton>
									<ThumbUp />
								</IconButton>
								<h4>45 likes</h4>
							</NoteBottom>
							<div className='note__bottom-comments'>
								<h4>123 Comments</h4>
							</div>
						</NoteBottom> */}

						<NoteComments className='note__bottom-comments'>
							<CommentsOpen note={note} comments={<Comment note={note} />} />
						</NoteComments>
					</NoteContainer>
				))
			) : (
				<div>
					<h2>You have no notes</h2>
				</div>
			)}
		</>
	);
}
