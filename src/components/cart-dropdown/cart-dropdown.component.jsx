import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './cart-dropdown.styles.scss'

// context
import { CartContext } from '../../contexts/cart.context'

// component
import Button from '../button/button.component'
import CartItem from '../cart-items/cart-items.component'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	const navigate = useNavigate()

	console.log(cartItems.length)

	const handleNavigateToCheckoutOnClick = () => {
		navigate('/checkout')
	}

	return (
		<div className='cart-dropdown-container'>
			{cartItems.length < 1 ? (
				<p className='empty-message'> Nothing inside cart...</p>
			) : (
				<div className='cart-items'>
					{cartItems.map((cartItem) => {
						return <CartItem key={cartItem.id} cartItem={cartItem} />
					})}
				</div>
			)}

			<Button buttonType='inverted' onClick={handleNavigateToCheckoutOnClick}>
				Go To Checkout
			</Button>
		</div>
	)
}

export default CartDropdown
