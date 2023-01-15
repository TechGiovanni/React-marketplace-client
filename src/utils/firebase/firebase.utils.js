// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	getRedirectResult,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore'

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
export const auth = getAuth(firebaseApp) // holds the initialize app and the api key/Data

export const getFacebookRedirectResult = () => {
	if (auth) {
		const user = getRedirectResult(auth)
		console.log('result', user)
	}
}

const facebookProvider = new FacebookAuthProvider()
facebookProvider.addScope('public_profile')

export const signInWithFacebookRedirect = () => {
	signInWithRedirect(auth, facebookProvider)
}

const googleProvider = new GoogleAuthProvider()
googleProvider.getCustomParameters({
	prompt: 'select_account',
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return
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
				...additionalInformation,
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

// Create in a user
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	// if theirs no email value or password value
	if (!email || !password) return

	return await createUserWithEmailAndPassword(auth, email, password)
}

// Sign in a user
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	// if theirs no email value or password value
	if (!email || !password) return

	// Pass the user email and password from the login form to the signInWithEmailAndPassword firebase function
	// userCredential has three attributes, and one of them is the user itself.
	const userCredential = await signInWithEmailAndPassword(auth, email, password)

	console.log(userCredential.user)

	return userCredential
}

// Sign out user
export const signOutUser = async () => {
	return await signOut(auth)
}

// authenticated user State change listener, when a user log in or sign out
export const onAuthStateChangedListener = (callback) => {
	onAuthStateChanged(auth, callback)
}

// upload data to the collections in firebase
export const addCollectionAndDocuments = async (
	collectionName,
	objectToAdd
) => {
	const collectionReference = collection(db, collectionName)
	const batch = writeBatch(db)

	// for each object inside the array, in which we have 5.
	// Create a new document reference for each object where the key is the title and the value is the object itself.
	// this is our entire batch
	objectToAdd.forEach((object) => {
		const docRef = doc(collectionReference, object.title.toLowerCase())
		// batchset on this document reference
		batch.set(docRef, object)
	})

	// this will fire off the batch
	await batch.commit()
}

export const getCategoriesAndDocuments = async () => {
	const collectionReference = collection(db, 'categories')

	// I want to generate a query of of this collection
	const q = query(collectionReference)
	const querySnapshot = await getDocs(q)
	// this will return an array of all of those inidividual documents inside and the snapShots are the actual data themselves.
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data()
		acc[title.toLowerCase()] = items
		return acc
	}, {})
	return categoryMap
}
