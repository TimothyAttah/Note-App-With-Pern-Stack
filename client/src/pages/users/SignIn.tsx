import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import SignInForm from '../../components/forms/SignInForm';
import { images } from '../../components/Images';
import { Modal } from '../../components/modal';
import { Backdrop } from '../../components/Backdrop';
import { Container, CloseButton, GoogleBox, Divider, ImgBox } from './Styles';
import history from '../../history';

const SignIn: FC = () => {
	return (
		<Fragment>
			<Backdrop close={() => history.push('/')} />
			<Modal>
				<Container>
					<CloseButton>
						<Button onClick={() => history.push('/')}>X</Button>
					</CloseButton>
					<h1>Note3Sixty</h1>
					<h3>Welcome back</h3>
					<p>Enter your personal details to sign in</p>
					<GoogleBox>
						<Link to='/auth/users/google'>
							<button>
								<ImgBox>
									<img src={images.GoogleIcon} alt='' width='30px' />
								</ImgBox>
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
