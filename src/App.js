import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/signIn.component'
import Navigation from './routes/navigation/Navigation.component'

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Navigation />}>
				<Route exact index element={<Home />} />
				<Route exact path='/sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	)
}

export default App
