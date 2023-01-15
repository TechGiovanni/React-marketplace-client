import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Shop from './routes/shop/shop.component'
import Navigation from './routes/navigation/Navigation.component'
import Authentication from './routes/authentication/authentication.component'
import CheckOut from './routes/checkout/checkout.component'

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Navigation />}>
				<Route exact index element={<Home />} />
				<Route exact path='/shop' element={<Shop />} />
				<Route exact path='/auth' element={<Authentication />} />
				<Route exact path='/checkout' element={<CheckOut />} />
			</Route>
		</Routes>
	)
}

export default App
