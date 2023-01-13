import React, { useState } from 'react'

// StyleSheet
import './sign-in-form.styles.scss'

// Components
import FormInput from '../form-input/formInput.component'
import Button from '../button/button.component'

// Firebase Authentication
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
// import { getRedirectResult } from 'firebase/auth'

const defaultSignInFields = {
	email: '',
	password: '',
}

const SignInForm = () => {
	// State
	const [inputFields, setInputFields] = useState(defaultSignInFields)
	const { email, password } = inputFields
	//  Context

	const handleSignInInputChange = (event) => {
		const { name, value } = event.target
		setInputFields({ ...inputFields, [name]: value })
		// console.log(inputFields)
	}

	const resetFormFields = () => {
		setInputFields(defaultSignInFields)
	}

	const handleLoginSubmit = async (event) => {
		event.preventDefault()

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password)

			resetFormFields()
			// console.log(user)
		} catch (error) {
			const errorCode = error.code
			const errorMessage = error.message

			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect password for email')
					break
				case 'auth/user-not-found':
					alert('User email not found.')
					break
				default:
					console.log(
						'Error signing in user.',
						'Error Code:',
						errorCode,
						'Error Message:',
						errorMessage
					)
			}
		}
	}

	const handleGoogleLoginClick = async () => {
		await signInWithGooglePopup()
		// No matter what happens, we get get back a user.
	}

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleLoginSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleSignInInputChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleSignInInputChange}
					name='password'
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					{/* // buttons are make to submit by default, so in order to prevent a submit form when you click google sign in, we use the type attribute to just button. and this will prevent the button from submitting the sign in form.  */}
					<Button
						type='button'
						buttonType='google'
						onClick={handleGoogleLoginClick}
					>
						{' '}
						Google SignIn
					</Button>
				</div>
			</form>
		</div>
	)
}

export default SignInForm
