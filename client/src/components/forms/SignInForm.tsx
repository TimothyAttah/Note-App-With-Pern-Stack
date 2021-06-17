import  { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import {useDispatch } from 'react-redux';
import { signInUser } from '../../redux/actions/authActions';

const FormContainer = styled.form`
	margin: 20px 0;
	label {
		font-weight: bolder;
	}
	input {
		display: block;
		width: 100%;
		border: 1px solid var(--gray-3);
		margin-top: 5px;
		margin-bottom: 20px;
		padding: 15px;
		border-radius: 5px;
		background: rgba(196, 196, 196, 0.05);
		::placeholder {
			color: var(--gray-4);
		}
	}
	button {
		width: 100%;
		padding: 15px;
		border-radius: 5px;
		background-color: var(--sky-blue);
		color: var(--white);
		:hover {
			background-color: var(--darker-sky-blue);
		}
	}
`;

const SignInForm: FC = () => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	}
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(signInUser(userData))
	}
	return (
		<div>
			<FormContainer onSubmit={handleSubmit}>
				<label htmlFor='email'>Email Address:</label>
				<input
					type='email'
					placeholder='example@example.com'
					name='email'
					value={userData.email}
					onChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					placeholder='Enter your password'
					name='password'
					value={userData.password}
					onChange={handleChange}
				/>
				<button>Sign In</button>
			</FormContainer>
		</div>
	);
};

export default SignInForm;
