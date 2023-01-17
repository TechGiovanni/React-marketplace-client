import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// context
import { CartContext } from '../../contexts/cart.context'

// component
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import CartItem from '../cart-items/cart-items.component'

// Styles
// import './cart-dropdown.styles.scss'
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	const navigate = useNavigate()

	console.log(cartItems.length)

	const handleNavigateToCheckoutOnClick = () => {
		navigate('/checkout')
	}

	return (
		<CartDropdownContainer>
			{cartItems.length ? (
				<CartItems>
					{cartItems.map((cartItem) => {
						return <CartItem key={cartItem.id} cartItem={cartItem} />
					})}
				</CartItems>
			) : (
				<EmptyMessage> Your're cart is empty...</EmptyMessage>
			)}

			<Button
				buttonType={BUTTON_TYPE_CLASSES.base}
				onClick={handleNavigateToCheckoutOnClick}
			>
				Go To Checkout
			</Button>
		</CartDropdownContainer>
	)
}

export default CartDropdown
