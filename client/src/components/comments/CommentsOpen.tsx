import React, { FC, ReactNode, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { InsertComment } from '@material-ui/icons';
import styled from 'styled-components';
import { NotesList } from '../../redux/InterfaceRedux';

interface CommentOpenProps {
	comments: ReactNode;
	note: NotesList;
}

const Container = styled.div`
	.icon {
		position: absolute;
		right: 0;
		top: -57px;
		.MuiSvgIcon-root {
			margin-right: 10px;
		}
		span {
			margin-right: 3px;
		}
	}
	@media (max-width: 600px) {
		.icon {
			font-size: 12px;
			font-weight: bolder;
			top: -48px;
			right: 0;
		}
	}
	@media (max-width: 414px) {
		.icon {
			.MuiSvgIcon-root {
				display: none;
			}
			top: -43px;
		}
	}
	@media (max-width: 300px) {
		.icon {
			top: -39px;
		}
	}
`;

const ContainerPrimary = styled.div`
	.icon {
		position: absolute;
		right: 0;
		top: -45px;
		.MuiSvgIcon-root {
			margin-right: 10px;
		}
		span {
			margin-right: 3px;
		}
	}
	@media (max-width: 350px) {
		.icon {
			font-size: 17px;
			font-weight: bolder;
			top: -40px;
			right: 0;
		}
	}
`;

export const CommentsOpen:FC<CommentOpenProps> = ({ comments, note }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			<IconButton onClick={handleClick} className='icon'>
				<InsertComment />
				<span>{note.comments?.length}</span>
				<span>Comments</span>
			</IconButton>
			<div>{isOpen && comments}</div>
		</Container>
	);
};


export const NotesReadComment: FC<CommentOpenProps> = ({ comments, note }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<ContainerPrimary>
			<IconButton onClick={handleClick} className='icon'>
				<InsertComment />
				<span>{note.comments?.length}</span>
				<span>Comments</span>
			</IconButton>
			<div>{isOpen && comments}</div>
		</ContainerPrimary>
	);
};