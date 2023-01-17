import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

// Context
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

// Components
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import ShoppingIcon from '../../components/cart-icon/card-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

// styleSheet
// import './navigation.styles.scss'
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './navigation.styles.jsx'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)

	const handleSignOutOnClick = async () => {
		await signOutUser()
	}

	const signIn = <NavLink to='/auth'>SIGN IN</NavLink>
	const signOut = (
		<NavLink as='span' to='/auth' onClick={handleSignOutOnClick}>
			SIGN OUT
		</NavLink>
	)

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/'>HOME</NavLink>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? signOut : signIn}
					<ShoppingIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	)
}

export default Navigation
