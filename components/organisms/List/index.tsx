import React from 'react'
import ListItem, { ListItemProps } from '../../molecules/ListItem'
import { FlatList, StyleSheet } from 'react-native'
import { rem } from '../../../other/Style'

interface ListProps {
	style?: object
	/** List of items are gonna be shown */
	data: ListItemProps[]
}

/** Title and description List */
const List: React.FC<ListProps> = (props) => {
	return (<FlatList contentContainerStyle={props.style}
		renderItem={
			({ item }) =>
				<ListItem key={item.key} title={item.title}
					description={item.description} />
		}
		data={props.data} />)
}

export default List
