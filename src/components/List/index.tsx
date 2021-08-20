import React from 'react'
import ListItem, { ItemData } from '../ListItem'
import { FlatList, StyleSheet } from 'react-native'
import { rem } from '../../other/Style'

/*
This is an example of React Native list. A list is a component
created to display sequence of items in a scrollable panel
*/

interface ListProps {
	style?: object
	/** List of item contents are gonna be shown */
	data: ItemData[],
	testID?: string
}

const styles = StyleSheet.create({
	list: {
		paddingBottom: 10 * rem
	}
})

/** Title and description List 
 * This list is designed to display items with description and title only.
 * An example of use for it is to display repositories.
*/
const List: React.FC<ListProps> = (props) => {
	return (<FlatList testID={props.testID}
		contentContainerStyle={[styles.list, props.style]}
		renderItem={
			({ item }) =>
				<ListItem testID="list-item"
					key={item.key}
					title={item.title}
					description={item.description} />
		}
		data={props.data} />)
}

export default React.memo(List) // <- Avoid rerendering when a modal is loaded
