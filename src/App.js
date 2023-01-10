import React, { useEffect, useState } from 'react'
import Directory from './components/directory/directory.component'

const App = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch('http://localhost:3001/api/v1/home/categories')
			.then((response) => response.json())
			.then((data) => setCategories(data))
	}, [])

	return (
		<>
			<Directory categories={categories} />
		</>
	)
}

export default App
