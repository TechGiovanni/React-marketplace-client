import './react-spinner.styles.scss'

import { TailSpin } from 'react-loader-spinner'

const ReactSpinner = () => {
	return (
		<div className='backdrop'>
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
		</div>
	)
}

export default ReactSpinner
