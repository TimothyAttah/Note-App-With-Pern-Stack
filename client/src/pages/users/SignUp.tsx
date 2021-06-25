import  { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import SignUpForm from '../../components/forms/SignUpForm';
import { images } from '../../components/Images';
import { Container, Divider, GoogleBox, ImgBox, CloseButton } from './Styles';
import {Modal} from '../../components/modal'
import history from '../../history';
import {Backdrop} from '../../components/Backdrop'


const SignUp: FC = () => {
	return (
		<Fragment>
			<Backdrop close={()=> history.push('/')} />
			<Modal>
				<Container>
					<CloseButton>
						<Button onClick={() => history.push('/')}>X</Button>
					</CloseButton>
					<h1>Note3Sixty</h1>
					<h3>Create your account</h3>
					<p>Enter your personal details to start your journey today</p>
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
					<SignUpForm />
					<small>
						Already have an account?
						<span>
							<Link to='/auth/users/signin'>Sign In here</Link>
						</span>
					</small>
				</Container>
			</Modal>
		</Fragment>
	);
};

export default SignUp;
