import { useContext } from 'react'

// contexts
import { CartContext } from '../../contexts/cart.context'

// stylesheet
import './checkout-Item.styles.scss'
import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Price,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './checkout-Item.styles.jsx'

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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>

			<Name>{name}</Name>

			<Quantity>
				<Arrow as='div' onClick={handleDecrementCounter}>
					{' '}
					&#10094;{' '}
				</Arrow>

				<Value>{quantity}</Value>

				{/* decrement button  */}
				<Arrow as='div' onClick={handleIncrementCounter}>
					{' '}
					&#10095;{' '}
				</Arrow>
			</Quantity>

			<Price>{price}</Price>
			<RemoveButton onClick={handleRemoveCartItemOnClick}>
				&#10005;{' '}
			</RemoveButton>
			{/* <button onClick={handleRemoveCartItemOnClick}>X</button> */}
		</CheckoutItemContainer>
	)
}

export default CheckoutItem
