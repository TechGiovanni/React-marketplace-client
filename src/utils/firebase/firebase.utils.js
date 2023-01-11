// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCgPcF-yJTF1UN8DdP3PMaOb7AhOv7EH4E',
	authDomain: 'clothing-db-ac56a.firebaseapp.com',
	projectId: 'clothing-db-ac56a',
	storageBucket: 'clothing-db-ac56a.appspot.com',
	messagingSenderId: '861601685638',
	appId: '1:861601685638:web:5f77a1cfb82904623ef107',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.getCustomParameters({
	prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
	// Check if there is an exiting document reference. meaning go in the
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapshot = await getDoc(userDocRef)

	if (!userSnapshot.exists()) {
		// if the user does not exist, create the user in the database
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			})
		} catch (error) {
			const errorCode = error.code
			const errorMessage = error.message
			console.log('Error creating the user', errorCode, errorMessage)
		}
	}
	// if user does exist, return the current user from where the doc referenced the user.
	return userDocRef
}
