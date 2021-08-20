import React, { FC } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
import { CommentsLists } from './CommentsLists';
// import { images } from '../Images';
// import CommentsForm from '../forms/CommentsForm';
import { NotesList } from '../../redux/interface';

interface CommentProps {
  note: NotesList
}

const Comments = styled.div`
	/* padding-top: 50px; */

	h5 {
		margin:10px 0;
	}
`;

export const Comment:FC<CommentProps> = ({ note }) => {
	console.log(note);
	return (
		<Comments>
			<Divider />
			<h5>Recent comments</h5>
			{note ? (
				note.comments?.map(comment => (
					<CommentsLists
						key={comment._id}
						name={comment.name}
						content={comment.content}
						profilePicture={comment.profilePicture}
						date={comment.createdAt}
					/>
			 ))
			) : (
				<h2>loading...</h2>
			)}
			{/* <h4 className='view'>View more comments...</h4> */}
			{/* <CommentsForm src={images.Benita} note={note} /> */}
		</Comments>
	);
};
