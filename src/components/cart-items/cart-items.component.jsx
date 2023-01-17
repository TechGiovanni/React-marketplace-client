// import './cart-items.styles.scss'
import {
	CartItemContainer,
	Image,
	ItemDetails,
	Name,
	Price,
} from './cart-items.styles.jsx'

function CartItems({ cartItem }) {
	const { name, quantity, imageUrl, price } = cartItem
	return (
		<CartItemContainer>
			<Image src={imageUrl} alt={name} />
			<ItemDetails>
				<Name>{name}</Name>
				<Price>
					{quantity} x ${price}
				</Price>
			</ItemDetails>
		</CartItemContainer>
	)
}

export default CartItems
