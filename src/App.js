import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component'
import Navigation from './routes/navigation/Navigation.component'

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Navigation />}>
				<Route exact index element={<Home />} />
				<Route exact path='/auth' element={<Authentication />} />
			</Route>
		</Routes>
	)
}

export default App
