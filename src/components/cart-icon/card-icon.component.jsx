import { useContext } from 'react'
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

// context
import { CartContext } from '../../contexts/cart.context'

// stylesheet
import './card-icon.styles.scss'
import {
	ShoppingIcon,
	CartIconContainer,
	ItemCount,
} from './card-icon.styles.jsx'

const CardIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

	const handleCartDropdownOnClick = () => {
		setIsCartOpen(!isCartOpen)
	}

	return (
		<CartIconContainer onClick={handleCartDropdownOnClick}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CardIcon
