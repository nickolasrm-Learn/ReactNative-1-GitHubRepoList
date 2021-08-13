import React from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'
import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import { rem } from '../../../other/Style'

export interface ListItemProps extends ViewProps {
	/** Large text displayed in the inner top part of a ListItem */
	title: string,
	/** Regular text displayed after title in a ListItem */
	description: string
	/** An unique for rendering the list item */
	key: string
}

const styles = StyleSheet.create({
	item: {
		padding: rem,
		marginVertical: 0.25 * rem,
		backgroundColor: '#FFFFFF',
		borderRadius: 0.5 * rem,
		elevation: 0.25 * rem
	},
	title: {
		marginTop: 0
	}
})

/** Custom list item with title and description */
const ListItem: React.FC<ListItemProps> = (props) => {
	return (<View {...props} style={[styles.item, props.style]}>
		<Title style={styles.title}>{props.title}</Title>
		<Text>{props.description}</Text>
	</View>)
}

export default ListItem
