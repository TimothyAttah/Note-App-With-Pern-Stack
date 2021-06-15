import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from '../../components/forms/SignUpForm';
import { images } from '../../components/Images';
import { Container, Divider, GoogleBox } from './Styles';


const SignUp: FC = () => {
	return (
		<Fragment>
			<Container>
				<h1>Note3Sixty</h1>
				<h3>Create your account</h3>
				<p>Enter your personal details to start your journey today</p>
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
				<SignUpForm />
				<small>
					Already have an account?
					<span>
						<Link to='/auth/users/signin'>Sign In here</Link>
					</span>
				</small>
			</Container>
		</Fragment>
	);
};

export default SignUp;
