import { useContext, useEffect } from 'react'

// context
import { CategoriesContext } from '../../contexts/categories.context'

// Components
import CategoryPreview from '../../components/category-preview/category-preview.component'

//
// Stylesheet
import './categories-preview.styles.scss'

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext)

	return (
		<div>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title]

				return <CategoryPreview key={title} title={title} products={products} />
			})}
		</div>
	)
}

export default CategoriesPreview
