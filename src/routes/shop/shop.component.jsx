import React, { useContext } from 'react'

import { ProductsContext } from '../../contexts/products.context'

const Shop = () => {
	const { products } = useContext(ProductsContext)

	return (
		<div>
			{products.map((item) => {
				return (
					<div key={item.id}>
						<h1>{item.name}</h1>
					</div>
				)
			})}
		</div>
	)
}

export default Shop
