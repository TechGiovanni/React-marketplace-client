import { useState } from 'react'
// import { useEffect, useContext } from 'react'
import Directory from '../../components/directory/directory.component'

//context
// import { LoadingContext } from '../../contexts/loading.context'

// Data
import CATEGORY_DATA from '../../components/app-data/categories.json'

const Home = () => {
	const [categories, setCategories] = useState(CATEGORY_DATA)

	// useEffect(() => {
	// 	const result = async () => {
	// 		setLoading(true)
	// 		fetch('http://localhost:3000/api/v1/categories')
	// 			.then((response) => response.json())
	// 			.then((data) => {
	// 				if (data) {
	// 					setCategories(data)
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				console.error('Errors:', error)
	// 			})
	// 		setLoading(false)
	// 	}

	// 	result()
	// }, [setLoading])

	return (
		<div>
			<Directory categories={categories} />
		</div>
	)
}

export default Home
