import React, { useState } from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
import history from '../../history';
import {nameToInitials, fullName, user } from '../NameInitials';



const NameContainer = styled.h5`
  padding-right: 15px;
  color: var(--clr-light);
  @media(max-width:700px){
    display: none;
  }
`;




export const ProfileModal = () => {
	// const dispatch = useDispatch();
	const [auth] = useState(true);
	// const [user] = useState(true);

	const [ anchorEl, setAnchorEl ] = useState( null );
	
	const open = Boolean(anchorEl);

	const handleMenu = (event: any) => {
		setAnchorEl( event.currentTarget );
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('jwt');
		// localStorage.clear();
		// dispatch(logout());
		// history.push('/user/signin');
		window.location.reload();
	};

	return (
		<div>
			{auth && (
				<div>
					{user && (
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'
							style={{ padding: '0' }}
						>
							<NameContainer>{fullName}</NameContainer>
							<Avatar> {nameToInitials(fullName)}</Avatar>
						</IconButton>
					)}
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={ handleClose }
						style={ {
							zIndex: '99999' as any
						}}
					>
						<MenuItem onClick={handleClose}>
							<Link to={`/users/profile/${fullName}`}>Profile</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to='/user/friends/profile'>Friends Posts</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Button
								variant='contained'
								color='secondary'
								onClick={handleLogout}
							>
								Log Out
							</Button>
						</MenuItem>
					</Menu>
				</div>
			)}
		</div>
	);
};
