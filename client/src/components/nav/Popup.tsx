import React, { FC, MouseEventHandler, useState } from 'react';
import { IconButton, Menu } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { popupNav } from '../helper/Helper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PopupProps {
	note: object;
	events: (e: MouseEventHandler<HTMLAnchorElement>) => void;
}

const NavContainer = styled.div`
	width: 120px;
	padding: 0 10px;
	margin-bottom: 7px;
	a {
		display: flex;
		align-items: center;
		color: var(--clr-lightBlue);
		span {
			margin-left: 7px;
			color: var(--clr-dark);
		}
	}
`;

export const Popup:FC<PopupProps> = ({ note }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (e: any) => {
		setAnchorEl(e.currentTarget);
  };
  
  // MouseEventHandler<HTMLAnchorElement>
	// MouseEvent<HTMLAnchorElement, MouseEvent>

	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<IconButton aria-label='settings' onClick={handleClick}>
				<MoreVert />
			</IconButton>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<div>
					{popupNav.map((item, index) => {
						return (
							<NavContainer key={index}>
								<Link
									// to={`${item.url}/${note._id}/${item.path}`}
									to='/'
									onClick={handleScroll}
								>
									{item.icon}
									<span>{item.name}</span>
								</Link>
							</NavContainer>
						);
					})}
				</div>
			</Menu>
		</div>
	);
};
