import './checkout.styles.scss'
import { useContext } from 'react'

// contexts
import { CartContext } from '../../contexts/cart.context'

// components
import CheckoutItem from '../../components/checkout-item/checkout-Item.component'

const CheckOut = () => {
	const { cartItems, cartTotal } = useContext(CartContext)

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					{' '}
					<span> Product</span>
				</div>
				<div className='header-block'>
					{' '}
					<span> Description</span>
				</div>
				<div className='header-block'>
					{' '}
					<span>Quantity</span>{' '}
				</div>
				<div className='header-block'>
					{' '}
					<span> Price</span>
				</div>
				<div className='header-block'>
					{' '}
					<span> Remove</span>
				</div>
			</div>

			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} item={item} />
			})}
			<span className='total'>total: $ {cartTotal}</span>
		</div>
	)
}

export default CheckOut
