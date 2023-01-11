import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const signIn = () => {
	const handleGoogleSignInClick = async () => {
		const { user } = await signInWithGooglePopup()
		// No matter what happens, we get get back a user.
		const userDocRef = await createUserDocumentFromAuth(user)
		console.log('Console:', user)
	}

	return (
		<div>
			<h1>sign In</h1>
			<button onClick={handleGoogleSignInClick}> Google</button>
		</div>
	)
}

export default signIn
