import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
	position: sticky;
	padding: 25px 20px;
	top: 0;
	z-index: 500;
	box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
	background-color: var(--white);
	h1 a {
		color: var(--light-blue);
	}
	h2 a {
		display: none;
		color: var(--light-blue);
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
	button {
		padding: 12px;
		width: 100px;
		background-color: var(--light-blue);
		color: var(--white);
		text-transform: uppercase;
		letter-spacing: 1.5px;
	}
	@media (max-width: 375px) {
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
				<Link to='/auth/users/signup'>
					<button>SignUp</button>
				</Link>
				<Link to='/auth/users/signin'>
					<button>SignIn</button>
				</Link>
			</HeaderButton>
		</Header>
	);
};

export default Headers;
