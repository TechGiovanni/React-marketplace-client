import React from 'react'

import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
}
// To show styling for different button, we are modifying the button style
// To do that we can create a variable storing an object with the keys being the type of buttons,
// If we get passed a string value of 'google' through the buttonType option in the parameters, We will target the BUTTON_TYPE_CLASSES key, which will be the google key, which will then return the value of that key which is the string associated with that specific key. which is 'google. and that will be added to the button class.

const Button = ({ children, buttonType, ...rest }) => {
	return (
		<button
			{...rest}
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
		>
			{children}
		</button>
	)
}

export default Button
