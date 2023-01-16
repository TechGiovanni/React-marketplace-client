import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './category-preview.styles.scss'

// Components
import ProductCard from '../product-card/product-card.component'

// Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

const CategoryPreview = ({ title, products }) => {
	//
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<div
			className='category-preview-container'
			data-aos='fade-up'
			data-aos-duration='1000'
		>
			<h2>
				<Link className='title' to={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className='preview'>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	)
}

export default CategoryPreview
