import { PixelRatio } from "react-native"
const contrast = require('contrast')

/*
This file contains all styles for the application
*/

/** Returns black if the provided color has light contrast, 
 * otherwise returns white */
export function blackOrWhite(color: string): string {
	return contrast(color) === 'light'
		? '#212121'
		: '#FFFFFF'
}

export const backgroundColor = '#FFFFFF'
export const foregroundColor = blackOrWhite(backgroundColor)
export const unfocusedForegroundColor = foregroundColor === 'black'
	? 'lightgray'
	: 'darkgray'

export const rem = 7 * PixelRatio.get() // <- Instead of using pixels or %, use Pixel ratio. 
// This way the app will look similar in different screen resolutions

export const errorBackgroundColor = '#B71C1C'
export const errorForegroundColor = blackOrWhite(errorBackgroundColor)

export default {
	backgroundColor, foregroundColor,
	unfocusedForegroundColor, rem,
	errorBackgroundColor, errorForegroundColor
}