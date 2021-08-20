import React from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
import { foregroundColor, rem } from '../../other/Style'

const styles = StyleSheet.create({
	title: {
		fontSize: 1.5 * rem,
		fontWeight: 'bold',
		marginVertical: 0.5 * rem,
		color: foregroundColor
	}
})

/** Regular styled application Title */
const Title: React.FC<TextProps> = (props) => {
	return (<Text {...props} style={[styles.title, props.style]}>
		{props.children}
	</Text>)
}

export default Title
