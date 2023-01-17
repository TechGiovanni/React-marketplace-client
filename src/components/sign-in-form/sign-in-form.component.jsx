import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// StyleSheet
import './sign-in-form.styles.scss'

//context
import { LoadingContext } from '../../contexts/loading.context'

// Components
import FormInput from '../form-input/formInput.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import ReactSpinner from '../react-spinner/react-spinner.component'

// Firebase Authentication
import {
	auth,
	signInWithGooglePopup,
	signInWithFacebookRedirect,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth'

const defaultSignInFields = {
	email: '',
	password: '',
}

const SignInForm = () => {
	// State
	const [inputFields, setInputFields] = useState(defaultSignInFields)

	//  Context
	const { loading, setLoading } = useContext(LoadingContext)

	const { email, password } = inputFields
	const navigate = useNavigate()

	const handleSignInInputChange = (event) => {
		const { name, value } = event.target
		setInputFields({ ...inputFields, [name]: value })
		// console.log(inputFields)
	}

	const resetFormFields = () => {
		setInputFields(defaultSignInFields)
	}

	const handleLoginWithEmailAndPasswordOnSubmit = async (event) => {
		event.preventDefault()
		setLoading(true)

		try {
			await signInAuthUserWithEmailAndPassword(email, password)

			resetFormFields()

			setLoading(false)
			navigate('/')
			//
		} catch (error) {
			//
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
		setLoading(true)
		await signInWithGooglePopup()
		setLoading(false)
		navigate('/')
		// No matter what happens, we get get back a user.
	}

	const handleFacebookLoginClick = async () => {
		setLoading(true)
		const result = signInWithFacebookRedirect()

		return result
	}

	useEffect(() => {
		const getUser = async () => {
			setLoading(true)
			const response = await getRedirectResult(auth)
			// setLoading(true)
			if (response) {
				// then create this user from the response.user
				console.log('response', response.user)
				setLoading(false)
				navigate('/')
			}
			setLoading(false)
		}

		getUser()
	}, [navigate, setLoading])

	return (
		<>
			{loading ? (
				<ReactSpinner />
			) : (
				<div className='sign-up-container'>
					<h2>Already have an account?</h2>
					<span>Sign in with your email and password</span>
					<form onSubmit={handleLoginWithEmailAndPasswordOnSubmit}>
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
							<div>
								<Button type='submit'>Sign In</Button>
							</div>
							{/* // buttons are make to submit by default, so in order to prevent a submit form when you click google sign in, we use the type attribute to just button. and this will prevent the button from submitting the sign in form.  */}
							<h3>Social Sign In:</h3>
							<div className='buttons-social-container'>
								<Button
									type='button'
									buttonType={BUTTON_TYPE_CLASSES.inverted}
									onClick={handleGoogleLoginClick}
								>
									Google SignIn
								</Button>
								<Button
									type='button'
									buttonType={BUTTON_TYPE_CLASSES.google}
									onClick={handleFacebookLoginClick}
								>
									{' '}
									Facebook
								</Button>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	)
}

export default SignInForm
