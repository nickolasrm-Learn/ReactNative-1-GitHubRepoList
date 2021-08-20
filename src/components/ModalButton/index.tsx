import {
	TouchableOpacity, StyleSheet, TouchableOpacityProps
} from 'react-native'
import React from 'react'
import Text from '../Text'
import { rem } from '../../other/Style'

interface ModalButtonProps extends TouchableOpacityProps {
	text: string,
	color?: string
}

const styles = StyleSheet.create({
	button: {
		padding: 0.7 * rem,
	}
})

/** Button to be used in modals
 * This button is a text centered and container stylable 
 * component desired to be used in a modal. For example, this can be 
 * used as an OK button of a modal
 */
const ModalButton: React.FC<ModalButtonProps> = (props) => {
	return (<TouchableOpacity {...props}
		style={[styles.button, props.style]}>
		<Text style={{
			color: props.color || 'black',
			textAlign: 'center',
			fontWeight: 'bold'
		}}
			testID="text-styles-component">
			{props.text}
		</Text>
	</TouchableOpacity>)
}

export default ModalButton
