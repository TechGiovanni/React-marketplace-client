import { useContext } from 'react'

import './checkout-Item.styles.scss'
// // contexts
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ item }) => {
	const { addItemToCart, decrementItemFromCart, removeCartItemFromCart } =
		useContext(CartContext)

	const { imageUrl, name, price, quantity } = item
	console.log(item)

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
		<div className='checkout-ittem'>
			<img src={imageUrl} alt={name} />
			<span>{name}</span>
			<div>
				<button onClick={handleDecrementCounter}> - </button>

				<span>{quantity}</span>
				<button onClick={handleIncrementCounter}> + </button>
			</div>
			<p>{price}</p>
			<button onClick={handleRemoveCartItemOnClick}>X</button>
		</div>
	)
}

export default CheckoutItem
