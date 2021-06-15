import React, { FC } from 'react';
import styled from 'styled-components';

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
	return (
		<div>
			<FormContainer>
				<label htmlFor='email'>Email Address:</label>
				<input type='email' placeholder='example@example.com' name='email' />
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					placeholder='Enter your password'
					name='password'
				/>
				<button>Sign In</button>
			</FormContainer>
		</div>
	);
};

export default SignInForm;
