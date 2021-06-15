import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

import SignInForm from '../../components/forms/SignInForm';
import { images } from '../../components/Images';
import { Container, GoogleBox, Divider } from './Styles';


const SignIn: FC = () => {
	return (
		<Fragment>
			<Container>
				<h1>Note3Sixty</h1>
				<h3>Welcome back</h3>
				<p>Enter your personal details to sign in</p>
				<GoogleBox>
					<Link to='/auth/users/google'>
						<button>
							<img src={images.GoogleIcon} alt='' width='30px' />
							<span>Log in with Google</span>
						</button>
					</Link>
				</GoogleBox>
				<Divider>
					<img src={images.LineIcon} alt='' />
					<span>Or</span>
					<img src={images.LineIcon} alt='' />
				</Divider>
				<SignInForm />
				<small>
					Don't have an account?
					<span>
						<Link to='/auth/users/signup'>Sign Up here</Link>
					</span>
				</small>
			</Container>
		</Fragment>
	);
};

export default SignIn;
