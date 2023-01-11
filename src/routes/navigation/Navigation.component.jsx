import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './Navigation.component.scss'

const Navigation = () => {
	return (
		<>
			<nav className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/'>
						HOME
					</Link>
					<Link className='nav-link' to='/sign-in'>
						SIGN IN
					</Link>
				</div>
			</nav>
			<Outlet />
		</>
	)
}

export default Navigation
