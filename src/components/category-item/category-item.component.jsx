import './category-item.styles.scss'

import React from 'react'

const CategoryItem = ({ category }) => {
	const { imageUrl, title } = category
	return (
		<>
			<div className='category-container'>
				<div
					className='background-image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				></div>
				<div className='category-body-container'>
					<h2>{title}</h2>
					<p>Shop work</p>
				</div>
			</div>
		</>
	)
}

export default CategoryItem
