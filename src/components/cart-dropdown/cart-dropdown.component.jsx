import './cart-dropdown.styles.scss'
import Button from '../button/button.component'

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<Button buttonType='inverted'>Go To Checkout</Button>
		</div>
	)
}

export default CartDropdown
