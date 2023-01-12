import React, { useState } from 'react'

import './signup-form.styles.scss'

import FormInput from '../form-input/formInput.component'
import Button from '../button/button.component'

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { displayName, email, password, confirmPassword } = formFields

	const resetFormFields = () => {
		// this just sets the form to it's initial state from the original object.
		setFormFields(defaultFormFields)
	}

	const handleFormInputChange = async (event) => {
		const { name, value } = event.target

		const formInput = { ...formFields, [name]: value }

		setFormFields(formInput)
		// console.log(formInput)
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault()
		console.log(event)

		// [] confirm that the password matches
		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}

		// [] Create the user. Using try catch block
		// We will try to create the authenticated user with email and password. that we destructured off of our form fields.
		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password)
			console.log('res', user)
			await createUserDocumentFromAuth(user, { displayName })

			resetFormFields()
		} catch (error) {
			const errorCode = error.code
			const errorMessage = error.message
			if (errorCode === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use')
			}
			// console.log('Error creating the user', errorCode, errorMessage)
			console.log(
				'Error creating the user.',
				'Error Code:',
				errorCode,
				'Error Message:',
				errorMessage
			)
		}
	}

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleFormSubmit}>
				{/* // required makes sure the input is not empty */}

				<FormInput
					label='Display Name'
					type='text'
					required
					onChange={handleFormInputChange}
					name='displayName'
					value={displayName}
				/>

				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleFormInputChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleFormInputChange}
					name='password'
					value={password}
				/>

				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleFormInputChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	)
}

export default SignUpForm
