import { createContext, useEffect, useState } from 'react'

const removeCartItem = (cartItems, itemToRemove) => {
	//
	const reduceCart = cartItems.filter((item) => {
		console.log('filter Item', item)
		return item.id !== itemToRemove.id
	})

	console.log('filter Item After', reduceCart)
	return [...reduceCart]
}

const decreaseCartItem = (cartItems, itemToDecrease) => {
	// console.log('itemToDecrease', itemToDecrease.quantity)
	if (itemToDecrease.quantity > 0) {
		const newCart = cartItems.map((cartItem) => {
			//
			// console.log('cartItem Q', cartItem.quantity)
			//
			return cartItem.id === itemToDecrease.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		})

		return newCart
	}

	return [...cartItems]
}

// this functions is used to try an find a product that matches whats already inside the cart.
// It takes the products and the product you want t add to the cart
const addCartItem = (cartItems, productToAdd) => {
	// Find if cart items contains the product you want to add
	// if found increment quantity
	// Return a new array with the modified cart items with new cart items

	// we use the find method. Passing it a callback. It will receive each item inside the array, It returns a boolean value. If the booolean value is true. then this method will exit giving you back the cart item that returned the true boolean. so we want to Only return true if this specific cart item's id is equal to the product we want to Add id value (productToAdd.id). This is how we are able to track weather or not the cart item matches one that we want to add.
	// find if cartItem contains productToAdd
	const itemExist = cartItems.find((cartItem) => {
		return cartItem.id === productToAdd.id
	})

	// if found increment quantity
	if (itemExist) {
		const newCart = cartItems.map((cartItem) => {
			return cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		})

		return newCart
	}

	// implicitly return an array, with the current items, along with the new item with the extra quantity field.
	// / return a new array with the modified cartItems and ew cart item
	return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const defaultData = []

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},

	cartCount: 0,
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState(defaultData)
	const [cartCount, setCartCount] = useState(0)

	// anytime the cart items changes in any way, rerender the page, with the sum of all the items.
	useEffect(() => {
		const newTotal = cartItems.reduce((total, currentCartItem) => {
			return total + currentCartItem.quantity
		}, 0)
		setCartCount(newTotal)
	}, [cartItems])

	const addItemToCart = (productToAdd) => {
		// [] Check if you need to render a new cart item, if it is not already in the cart
		// [] or Find the existing cart item for this product and just increase the quantity by one.
		// set cart items, passing through the cart items,
		// As well as the product to add.
		console.log('New Product To Add', productToAdd)

		setCartItems(addCartItem(cartItems, productToAdd))

		console.log('Update finished', cartItems)
	}

	const decrementItemFromCart = (itemToDecrease) => {
		setCartItems(decreaseCartItem(cartItems, itemToDecrease))
	}

	const removeCartItemFromCart = (itemToRemove) => {
		setCartItems(removeCartItem(cartItems, itemToRemove))
	}

	const value = {
		setIsCartOpen,
		isCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		decrementItemFromCart,
		removeCartItemFromCart,
	}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
