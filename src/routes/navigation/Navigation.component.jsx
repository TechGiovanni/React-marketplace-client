import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

// Context
import { UserContext } from '../../contexts/user.context'

// Components
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'

// styleSheet
import './Navigation.component.scss'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)

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
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default Navigation
