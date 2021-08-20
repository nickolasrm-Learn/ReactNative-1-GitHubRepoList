import React from 'react'
import { StyleSheet, TextInputSubmitEditingEventData, View } from 'react-native'
import Input from '../../components/Input'
import ErrorModal from '../../components/ErrorModal'
import List from '../../components/List'
import Title from '../../components/Title'
import { rem } from '../../other/Style'
import { ListItemProps } from '../../components/ListItem'
import { NativeSyntheticEvent } from 'react-native'

interface HomeTemplateProps {
	/** Large text displayed at the top of the screen */
	title: string,

	/** Placeholder of the Github username input */
	inputPlaceholder?: string,
	/** Executed whenever the user hits return keyboard button */
	onInputSubmit: (ev: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void,

	/** Displays an error modal if enabled */
	error: boolean,
	/** Controls the error prop value */
	setError: (value: boolean) => void,
	/** Error modal title */
	errorTitle: string,
	/** Error modal description */
	errorMessage: string,

	/** List of repositories are gonna be displayed */
	data: ListItemProps[]
}

const styles = StyleSheet.create({
	container: {
		marginTop: 0 * rem,
		overflow: 'visible'
	},
	header: {
		margin: rem,
		marginBottom: 0,
	},
	input: {
		marginVertical: rem
	},
	list: {
		paddingHorizontal: rem
	}
})

const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Title>
					{props.title}
				</Title>
				<Input testID="user-input"
					style={styles.input}
					placeholder={props.inputPlaceholder}
					onSubmitEditing={props.onInputSubmit} />
			</View>
			<List style={styles.list}
				data={props.data} />
			<ErrorModal testID="error-modal"
				title={props.errorTitle}
				message={props.errorMessage}
				setVisible={props.setError}
				visible={props.error}
			/>
		</View>
	)
}

export default HomeTemplate