import React from 'react'
import {
	Text as RText, TextProps as RTextProps,
	StyleSheet
} from 'react-native'
import { foregroundColor, rem } from '../../../other/Style'

interface TextProps extends RTextProps {
	style?: object
}

const styles = StyleSheet.create({
	text: {
		fontSize: rem,
		color: foregroundColor
	}
})

/** Regular application Text */
const Text: React.FC<TextProps> = (props) => {
	return (<RText {...props} style={[styles.text, props.style]}>
		{props.children}
	</RText>)
}

export default Text
