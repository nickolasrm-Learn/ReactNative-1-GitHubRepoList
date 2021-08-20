import React, { useCallback, useState } from 'react'
import {
	StyleSheet, TextInput, TextInputProps
} from 'react-native'
import { rem, foregroundColor, unfocusedForegroundColor } from '../../other/Style'

/**
 * The TextInput component is a regular input,
 * but this is a component designed to use the system native input.
 */

const styles = StyleSheet.create({
	input: {
		borderWidth: 2,
		fontSize: rem,
		padding: 0.5 * rem,
		borderRadius: 0.5 * rem,
		color: foregroundColor
	}
})

/** Styled regular TextInput 
 * This is a regular textinput with all its props, but with a border
 * and padding. Also it changes its style whenever the user focuses
 * and unfocuses the component
*/
const Input: React.FC<TextInputProps> = (props) => {
	const [isFocused, setFocused] = useState(false)

	return (<TextInput {...props} style={[styles.input, props.style,
	{
		borderColor: isFocused
			? foregroundColor
			: unfocusedForegroundColor
	}]}
		underlineColorAndroid='transparent'
		onFocus={useCallback((ev) => {
			setFocused(true)
			if (props.onFocus)
				props.onFocus(ev)
		}, [props.onFocus])}
		onBlur={useCallback((ev) => {
			setFocused(false)
			if (props.onBlur)
				props.onBlur(ev)
		}, [props.onBlur])}
		onSubmitEditing={props.onSubmitEditing}
		editable />)
}

export default Input
