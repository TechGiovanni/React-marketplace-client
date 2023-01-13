import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

// context
import { CartContext } from '../../contexts/cart.context'

import './card-icon.styles.scss'

const CardIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext)

	const handleCartDropdownOnClick = () => {
		setIsCartOpen(!isCartOpen)
		console.log(isCartOpen)
	}

	return (
		<div className='cart-icon-container' onClick={handleCartDropdownOnClick}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	)
}

export default CardIcon
