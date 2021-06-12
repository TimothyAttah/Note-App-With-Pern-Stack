import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 a {
		color: var(--light-blue);
	}
`;

const HeaderButton = styled.div`
	button {
		padding: 10px;
		width: 100px;
		background-color: var(--light-blue);
		color: var(--white);
	}
`;

const Headers: FC = () => {
	return (
		<Header>
			<h1>
				<Link to='/'>Note3Sixty</Link>
			</h1>
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
