import React, { FC } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { CommentsLists } from './CommentsLists';
// import { images } from '../Images';
import { NotesList } from '../../redux/interface';
import { CommentsForm } from '../forms/CommentsForm';

interface CommentProps {
  note: NotesList
}

const Comments = styled.div`
	/* padding-top: 50px; */
	padding: 20px;
	height: calc(50vh - 100px);
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgb(179, 179, 179);
	}
	h5 {
		margin: 10px 0;
	}
`;

export const Comment:FC<CommentProps> = ({ note }) => {
	console.log(note);
	console.log(note.comments)
	return (
		<Comments>
			<Divider />
			<h5>Recent comments</h5>
			{note ? (
				note.comments?.map(item => (
					<CommentsLists
						key={item._id}
						content={item.comment}
						commentId={item._id}
						// name={item.name}
						// profilePicture={item.profilePicture}
						// date={item.createdAt}
					
					/>
			 ))
			) : (
				<h2>loading...</h2>
			)}
			{/* <h4 className='view'>View more comments...</h4> */}
			<CommentsForm  note={note} />
		</Comments>
	);
};
