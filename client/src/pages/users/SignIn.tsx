import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

import SignInForm from '../../components/forms/SignInForm';
import { images } from '../../components/Images';
import { Modal } from '../../components/modal';
import { Backdrop } from '../../components/Backdrop';
import { Container, CloseButton, GoogleBox, Divider } from './Styles';
import history from '../../history';


const SignIn: FC = () => {
	return (
		<Fragment>
			<Backdrop />
			<Modal>
				<Container>
					<CloseButton>
						<button onClick={() => history.push('/')}>X</button>
					</CloseButton>
					<h1>Note3Sixty</h1>
					<h3>Welcome back</h3>
					<p>Enter your personal details to sign in</p>
					<GoogleBox>
						<Link to='/auth/users/google'>
							<button>
								<div>
									<img src={images.GoogleIcon} alt='' width='30px' />
								</div>
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
			</Modal>
		</Fragment>
	);
};

export default SignIn;
