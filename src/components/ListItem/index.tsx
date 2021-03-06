import React from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'
import Title from '../Title'
import Text from '../Text'
import { rem } from '../../other/Style'

/*
A list item is the component minimal component displayed within a list.
This is an example of a custom list item. Instead of a regular item, which
only shows a text in a view, this custom item shows a title and a description.
*/

interface BasicItemData {
	/** Large text displayed in the inner top part of a ListItem */
	title: string,
	/** Regular text displayed after title in a ListItem */
	description: string,
}

/** Interface for adding new ListItems */
export interface ItemData extends BasicItemData {
	/** An unique for rendering the list item */
	key: any
}

interface ListItemProps extends ViewProps, BasicItemData { }

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

/** Custom list item with title and description
 * This is a custom list item to be used in a FlatList.
 * It shows a styled Title and a text Description under it
 */
const ListItem: React.FC<ListItemProps> = (props) => {
	return (<View testID="list-item-view"
		{...props}
		style={[styles.item, props.style]}>
		<Title style={styles.title}>{props.title}</Title>
		<Text>{props.description}</Text>
	</View>)
}

export default ListItem
