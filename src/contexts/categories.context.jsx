import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

// import SHOP_DATA from '../components/app-data/shop-data.js'

export const CategoriesContext = createContext({
	categoriesMap: {},
	setProducts: () => [],
})

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({})
	const value = { categoriesMap, setCategoriesMap }

	useEffect(() => {
		// any assyn thing you need to do inside useEffect, wrap it inside an async function, and then you call the method at the bottom.
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments()
			console.log('categoryMap', categoryMap)
			setCategoriesMap(categoryMap)
		}
		getCategoriesMap()
	}, [])

	//
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	)
}
