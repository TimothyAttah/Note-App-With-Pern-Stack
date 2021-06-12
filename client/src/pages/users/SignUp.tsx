import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../../components/forms/SignUpForm';
import { images } from '../../components/Images';


const SignUp: FC = () => {
  return (
		<div>
			<h1>Sign Up Page</h1>
			<h2>Note3Sixty</h2>
			<h4>Create your account</h4>
			<p>Enter your personal details to start your journey today</p>
			<div>
				<Link to='/auth/users/google'>
					<button>
						<img src={images.GoogleIcon} alt='' width='30px' />
						<span>Log in with Google</span>
					</button>
				</Link>
			</div>
			<div>
				<img src={images.LineIcon} alt='' />
				<span>Or</span>
				<img src={images.LineIcon} alt='' />
      </div>
      <SignUpForm />
      <small>Already have an account <span><Link to='/auth/users/signin'>Sign In here</Link></span></small>
		</div>
	);
}

export default SignUp
