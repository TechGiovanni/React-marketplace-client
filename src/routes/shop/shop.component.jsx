import React, { useContext } from 'react'

import './shop.styles.scss'

import ProductCard from '../../components/product-card/product-card.component'

import { ProductsContext } from '../../contexts/products.context'

const Shop = () => {
	const { products } = useContext(ProductsContext)

	return (
		<div className='products-container'>
			{products.map((product) => {
				return <ProductCard key={product.id} product={product}></ProductCard>
			})}
		</div>
	)
}

export default Shop
