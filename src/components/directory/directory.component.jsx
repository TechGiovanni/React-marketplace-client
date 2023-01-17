// stylesheet
// import './directory.styles.scss'
import { DirectoryContainer } from './directory.styles.jsx'

// components
import DirectoryItem from '../directory-item/directory-item.component'

const Directory = ({ categories }) => {
	return (
		<>
			<DirectoryContainer>
				{categories.map((category) => (
					<DirectoryItem key={category.id} category={category} />
				))}
			</DirectoryContainer>
		</>
	)
}

export default Directory
