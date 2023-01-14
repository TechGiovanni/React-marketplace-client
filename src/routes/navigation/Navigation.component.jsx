import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

// Context
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

// Components
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import ShoppingIcon from '../../components/cart-icon/card-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

// styleSheet
import './Navigation.component.scss'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)

	const handleSignOutOnClick = async () => {
		await signOutUser()
	}

	const signIn = (
		<Link className='nav-link' to='/auth'>
			SIGN IN
		</Link>
	)
	const signOut = (
		<Link className='nav-link' to='/auth' onClick={handleSignOutOnClick}>
			SIGN OUT
		</Link>
	)

	return (
		<>
			<nav className='navigation'>
				<Link className='logo-container' to='/'>
					<CrownLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/'>
						HOME
					</Link>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? signOut : signIn}
					<ShoppingIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</nav>
			<Outlet />
		</>
	)
}

export default Navigation
