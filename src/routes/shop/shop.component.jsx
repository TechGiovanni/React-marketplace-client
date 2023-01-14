import React, { useContext, useEffect } from 'react'

import './shop.styles.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

import ProductCard from '../../components/product-card/product-card.component'

import { ProductsContext } from '../../contexts/products.context'

const Shop = () => {
	const { products } = useContext(ProductsContext)

	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<div
			className='products-container'
			data-aos='fade-up'
			data-aos-duration='1000'
		>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product}></ProductCard>
			})}
		</div>
	)
}

export default Shop
