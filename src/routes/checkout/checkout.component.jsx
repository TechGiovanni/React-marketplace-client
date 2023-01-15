import './checkout.styles.scss'
import { useContext } from 'react'

// contexts
import { CartContext } from '../../contexts/cart.context'

// components
import CheckoutItem from './checkout-Item.component'

const CheckOut = () => {
	const { cartItems } = useContext(CartContext)

	return (
		<div className='checkout-container'>
			<div className='heading'>
				<span>Product</span>
				<span>Description</span>
				<span>Quantity</span>
				<span>Price</span>
				<span>Remove</span>
			</div>
			<hr />
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} item={item} />
			})}
			<p>
				total: ${' '}
				{cartItems.reduce((total, currentItem) => {
					const result = currentItem.price * currentItem.quantity
					return total + result
				}, 0)}
			</p>
		</div>
	)
}

export default CheckOut
