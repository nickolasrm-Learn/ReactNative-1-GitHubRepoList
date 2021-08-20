import React, { useCallback } from 'react'
import {
	StyleSheet, Modal, View,
	GestureResponderEvent
} from 'react-native'
import {
	backgroundColor, rem,
	errorBackgroundColor, errorForegroundColor
} from '../../other/Style'
import ModalButton from '../ModalButton'
import Text from '../Text'
import Title from '../Title'

interface ErrorModalProps {
	title: string,
	message: string,
	/** Displayes the modal if enabled */
	visible: boolean,
	/** Function that controls the visible prop value */
	setVisible: (value: boolean) => void,
	testID?: string
}

const styles = StyleSheet.create({
	background: {
		zIndex: 100,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	outer_container: {
		width: '70%',
		backgroundColor: backgroundColor,
		borderRadius: 0.5 * rem,
		elevation: 8
	},
	inner_container: {
		padding: rem
	},
	button: {
		borderBottomLeftRadius: 0.5 * rem,
		borderBottomRightRadius: 0.5 * rem,
		backgroundColor: errorBackgroundColor,
	}
})

/** Used to display a big rectangle with error messages */
const ErrorModal: React.FC<ErrorModalProps> = (props) => {
	/** Closes modal */
	// useCallback avoids redefining same function
	const handlePress = useCallback((ev: GestureResponderEvent) => {
		props.setVisible(false)
	}, [props.setVisible])

	return (<Modal testID={props.testID || ''}
		animationType="fade"
		transparent={true}
		visible={props.visible}>
		<View style={styles.background}>
			<View style={styles.outer_container}>
				<View style={styles.inner_container}>
					<Title>{props.title}</Title>
					<Text>{props.message}</Text>
				</View>
				<ModalButton
					testID="modal-button"
					style={styles.button}
					color={errorForegroundColor}
					onPress={handlePress}
					text="OK" />
			</View>
		</View>
	</Modal>)
}

export default React.memo(ErrorModal) // <- Avoid rerendering when the repo list is loaded
