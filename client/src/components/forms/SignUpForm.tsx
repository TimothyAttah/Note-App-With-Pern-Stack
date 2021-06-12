import React from 'react'

const SignUpForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          placeholder='Enter your first name'
          name='firstName'
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          placeholder='Enter your last name'
          name='lastName'
        />
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          placeholder='example@example.com'
          name='email'
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder='Enter your password'
          name='password'
        />
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;
