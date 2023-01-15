import React, { useContext, useEffect, Fragment } from 'react'

import './shop.styles.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
// import ProductCard from '../../components/product-card/product-card.component'
import CategoryPreview from '../../components/category-preview/category-preview.component'

// context
import { CategoriesContext } from '../../contexts/categories.context'

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext)

	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<div className='shop-container' data-aos='fade-up' data-aos-duration='1000'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title]
				return (
					<CategoryPreview
						key={title}
						title={title}
						products={products}
					></CategoryPreview>
				)
			})}
		</div>
	)
}

export default Shop
