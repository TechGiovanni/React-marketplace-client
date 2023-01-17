import { useContext, useEffect } from 'react'

//context
import { LoadingContext } from '../../contexts/loading.context'

// Stylesheet
import './directory-item.styles.scss'
import {
	BackgroundImage,
	DirectoryItemBodyContainer,
	DirectoryItemContainer,
} from './directory-item.styles.jsx'

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
						<DirectoryItemContainer>
							<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
							<DirectoryItemBodyContainer>
								<h2>{title}</h2>
								<p>Shop work</p>
							</DirectoryItemBodyContainer>
						</DirectoryItemContainer>
					</>
				)}
			</div>
		</>
	)
}

export default DirectoryItem
