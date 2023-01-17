// stylesheet
// import './react-spinner.styles.scss'
import { BackDrop } from './react-spinner.styles.jsx'

import { TailSpin } from 'react-loader-spinner'

const ReactSpinner = () => {
	return (
		<BackDrop>
			<TailSpin
				height='80'
				width='80'
				color='#4fa94d'
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</BackDrop>
	)
}

export default ReactSpinner
