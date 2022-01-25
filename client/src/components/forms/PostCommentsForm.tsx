import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import {  PostList } from '../../redux/InterfaceRedux';

import { user } from '../NameInitials';

interface CommentsFormProps {
	post: PostList;
	commentsRef: any;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form = styled.form`
	display: flex;
	width: 100%;
	padding-top: 20px;
	.icon-image {
		padding: 0px 10px;
	}
	input {
		width: 100%;
		height: 100px;
		padding: 10px;
		outline: none;
		border: 1px solid gray;
		background-color: #fff;
		font-size: 1.1rem;
		::placeholder {
			color: grey;
			font-weight: bold;
		}
	}
	button {
		display: none;
	}
`;

export const CommentsForm: FC<CommentsFormProps> = ({ post, commentsRef }) => {
	const dispatch = useDispatch<any>();
	const [text, setText] = useState('');



	// console.log('this is comments form post list', post);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();


		const fullName = `${user?.firstName} ${user?.lastName}`
		const pics = `${user?.profilePicture}`
		const newComment = {
			fullName,
			pics,
			text
		}

    // dispatch(postComments(post?._id,text));

    // dispatch(postComments(post?._id, newComment));
		commentsRef.current.scrollIntoView({ behavior: 'smooth' })
		setText('');
	};
	return (
		<div>
			<Form
				//   dispatch(noteComments(note._id, (e as any).target[0].value))
				// }}
				onSubmit={handleSubmit}
			>
				{/* <div className='icon-image'>{src && <Avatar src={src} />}</div> */}
				<div className='icon-image'>
					<Avatar>
						<Person />
					</Avatar>
				</div>
				<input
					placeholder='Write a comment...'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<button type='submit'></button>
			</Form>
		</div>
	);
};
