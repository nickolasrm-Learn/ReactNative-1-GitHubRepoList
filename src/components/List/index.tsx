import React from 'react'
import ListItem, { ItemData } from '../ListItem'
import { FlatList, StyleSheet } from 'react-native'
import { rem } from '../../other/Style'

interface ListProps {
	style?: object
	/** List of items are gonna be shown */
	data: ItemData[],
	testID?: string
}

const styles = StyleSheet.create({
	list: {
		paddingBottom: 10 * rem
	}
})

/** Title and description List */
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
