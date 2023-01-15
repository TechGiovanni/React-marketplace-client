import './product-card.styles.scss'

import { useContext } from 'react'

// context
import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product
	const { addItemToCart } = useContext(CartContext)

	const handleAddItemToCartOnClick = () => {
		addItemToCart(product)
	}

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={name} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType='inverted' onClick={handleAddItemToCartOnClick}>
				Add To Card
			</Button>
		</div>
	)
}

export default ProductCard
