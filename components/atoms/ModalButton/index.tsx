import {
	TouchableOpacity, StyleSheet, TouchableOpacityProps
} from 'react-native'
import React from 'react'
import Text from '../Text'
import { rem } from '../../../other/Style'

interface ModalButtonProps extends TouchableOpacityProps {
	text: string,
	color?: string
}

const styles = StyleSheet.create({
	button: {
		padding: 0.7 * rem,
	}
})

/** Button to be used into modals */
const ModalButton: React.FC<ModalButtonProps> = (props) => {
	return (<TouchableOpacity {...props}
		style={[styles.button, props.style]}>
		<Text style={{
			color: props.color || 'black',
			textAlign: 'center',
			fontWeight: 'bold'
		}}>
			{props.text}
		</Text>
	</TouchableOpacity>)
}

export default ModalButton
