import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components
import ProductCard from '../product-card/product-card.component'

// Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// stylesheet
import './category-preview.styles.scss'
import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
	//
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<CategoryPreviewContainer data-aos='fade-up' data-aos-duration='1000'>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	)
}

export default CategoryPreview
