import { useContext } from 'react'

import './checkout-Item.styles.scss'
// contexts
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ item }) => {
	const { addItemToCart, decrementItemFromCart, removeCartItemFromCart } =
		useContext(CartContext)

	const { imageUrl, name, price, quantity } = item

	const handleDecrementCounter = () => {
		decrementItemFromCart(item)
	}

	const handleIncrementCounter = () => {
		addItemToCart(item)
	}

	const handleRemoveCartItemOnClick = () => {
		removeCartItemFromCart(item)
	}

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>

			<span className='quantity'>
				<div className='arrow' onClick={handleDecrementCounter}>
					{' '}
					&#10094;{' '}
				</div>

				<span className='value'>{quantity}</span>

				{/* decrement button  */}
				<div className='arrow' onClick={handleIncrementCounter}>
					{' '}
					&#10095;{' '}
				</div>
			</span>

			<span className='price'>{price}</span>
			<div className='remove-button' onClick={handleRemoveCartItemOnClick}>
				&#10005;{' '}
			</div>
			{/* <button onClick={handleRemoveCartItemOnClick}>X</button> */}
		</div>
	)
}

export default CheckoutItem
