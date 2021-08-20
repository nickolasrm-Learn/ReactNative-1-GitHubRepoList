import React, { useState, useCallback } from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import uuid from 'uuid-random'
import i18n from '../../../i18n'
import { getRepos } from '../../adapters/Github'
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'
import { ItemData } from '../../components/ListItem'

/*
This is the main app screen, it is the first and only graphical interface made for this app.
A screen is a component called by App.tsx and it is mostly composed of a template with information in it.
Check out templates/HomeTemplate/index.tsx for more information
*/

const { t } = i18n // <- Explained in i18n/index.ts

/** 
 * Repositories search screen 
 * This screen shows a title on top of it, an input for typing the github username and a list
 * Whenever the user types a username and press enter, it displays a modal if the user does not exists 
 * or a list of its repositories
 * */
export default function Home() {
	/** Controls modal 
	 * This state is used for controlling error modal visibility when a not existing user is searched */
	const [error, setError] = useState(false)
	/** Stores repositories 
	 * This state is used for storing a list of repositories shown in the repos list */
	const [repos, setRepos] = useState<ItemData[]>([])

	/** If a user with name specified in a TextInputSubmitEditing event is found, it sets repos 
	 * variable with the user repositories fetched data. Otherwise, it shows an error modal. */
	//	vv Use callback is used to avoid recreating when the screen is rerendered vv
	const handleInputSubmit = useCallback((ev: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
		getRepos(ev.nativeEvent.text,
			(data: any[]) => {
				const newRepos = data.map((repo) => {
					return {
						key: uuid(),
						title: repo.name,
						description: repo.description
					}
				})
				setRepos(newRepos)
			},
			(error: string) => {
				setError(true)
			})
	}, [setRepos, setError, uuid, getRepos])

	return (
		<HomeTemplate error={error}
			setError={setError}
			errorTitle={t('errorTitle')}
			errorMessage={t('errorMessage')}

			inputPlaceholder={t('inputPlaceholder')}
			onInputSubmit={handleInputSubmit}

			title={i18n.t('appTitle')}

			data={repos} />
	)
}
