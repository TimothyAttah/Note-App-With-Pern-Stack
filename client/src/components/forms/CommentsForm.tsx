import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import { NotesComments, NotesList, PostList } from '../../redux/InterfaceRedux'; 
import { noteComments } from '../../redux/actions/notes';
import { postComments } from '../../redux/actions/posts';
import { v4 } from 'uuid';

interface CommentsFormProps {
  note: NotesList;
  post?: PostList;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form = styled.form`
	display: flex;
	width: 100%;
	padding-top: 40px;
	.icon-image {
		padding: 0px 10px;
	}
	input {
		width: 100%;
		padding: 10px;
		outline: none;
    border: none;
    border-bottom: 1px solid gray;
    background-color: #eee;
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

export const CommentsForm: FC<CommentsFormProps> = ({ note, post}) => {
  const dispatch = useDispatch<any>();
  const [comment, setComment] = useState('')
  const [text, setText] = useState('')

  console.log('this is comments form post list', post);
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment:NotesComments = {
      _id: v4(),
      comment,
      // createdAt: new Date(),
      // profilePicture: '',
      // name: 'Tosin Love'
    };

    // const newPostComment = {
    //   text
    // }
     dispatch(noteComments(note._id, newComment));
    // if (note) {
    //   dispatch(noteComments(note._id, newComment))
    // } else {
    //   dispatch(postComments(post?._id, text))
    // }

    console.log(text);
    
    setText('');
  }
  return (
    <div>
      <Form
          
        //   dispatch(noteComments(note._id, (e as any).target[0].value))
        // }}
        onSubmit={handleSubmit}
      >

        {/* <div className='icon-image'>{src && <Avatar src={src} />}</div> */}
        <div className='icon-image'><Avatar><Person /></Avatar></div>
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
