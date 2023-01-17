import { useContext } from 'react'

// Stylesheet
import './product-card.styles.scss'
import {
	ProductCardContainer,
	Img,
	Footer,
	Name,
	Price,
} from './product-card.styles.jsx'

// context
import { CartContext } from '../../contexts/cart.context'

// component
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product
	const { addItemToCart } = useContext(CartContext)

	const handleAddItemToCartOnClick = () => {
		addItemToCart(product)
	}

	return (
		<ProductCardContainer>
			<Img src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={handleAddItemToCartOnClick}
			>
				Add To Card
			</Button>
		</ProductCardContainer>
	)
}

export default ProductCard
