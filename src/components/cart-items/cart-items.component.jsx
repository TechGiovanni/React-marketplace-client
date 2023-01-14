import './cart-items.styles.scss'

function CartItems({ cartItem }) {
	const { name } = cartItem
	return (
		<div>
			<h2>{name}</h2>
		</div>
	)
}

export default CartItems
