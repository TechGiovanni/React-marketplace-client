import { useContext, useEffect } from 'react'

//context
import { LoadingContext } from '../../contexts/loading.context'

import './directory-item.styles.scss'

// Components
import ReactSpinner from '../react-spinner/react-spinner.component'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DirectoryItem = ({ category }) => {
	const { loading } = useContext(LoadingContext)

	const { imageUrl, title } = category

	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<>
			<div
				className='directory-item-container'
				data-aos='fade-up'
				data-aos-duration='1250'
			>
				{loading ? (
					<ReactSpinner />
				) : (
					<>
						<div
							className='background-image'
							style={{
								backgroundImage: `url(${imageUrl})`,
							}}
						></div>
						<div className='directory-item-body-container'>
							<h2>{title}</h2>
							<p>Shop work</p>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default DirectoryItem
