import React, { FC } from 'react';
import {ButtonGroup, Button} from '@material-ui/core'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	padding: 25px 20px;
	top: 0;
	z-index: 700;
	box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
	background-color: var(--white);
	h1 a {
		color: #3f51b5;
	}
	h2 a {
		display: none;
		color: #3f51b5;
	}
	@media (max-width: 500px) {
		h1 {
			display: none;
		}
		h2 a {
			display: flex;
		}
	}
`;

const HeaderButton = styled.div`
	a {
		color: var(--white);
		padding: 5px 10px;
	}
	@media (max-width: 500px) {
		button {
			width: 80px;
		}
	}
`;

const Headers: FC = () => {
	return (
		<Header>
			<h1>
				<Link to='/'>Note3Sixty</Link>
			</h1>
			<h2>
				<Link to='/'>3Six</Link>
			</h2>
			<HeaderButton>
				<ButtonGroup variant='contained' color='primary'>
					<Button>
						<Link to='/auth/users/signup'>SignUp</Link>
					</Button>
					<Button>
						<Link to='/auth/users/signin'>SignUp</Link>
					</Button>
				</ButtonGroup>
			</HeaderButton>
		</Header>
	);
};

export default Headers;
