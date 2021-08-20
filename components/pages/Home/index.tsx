import React, { useState, useCallback } from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import uuid from 'uuid-random'
import i18n from '../../../i18n'
import { getRepos } from '../../../adapters/Github'
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'
import { ItemData } from '../../molecules/ListItem'

const { t } = i18n

/** Repositories search screen */
export default function Home() {
	/** Controls modal */
	const [error, setError] = useState(false)
	/** Stores repositories */
	const [repos, setRepos] = useState<ItemData[]>([])

	/** If a user is found, it sets setRepos variable with the user repositories data.
	 * Otherwise, it shows the modal
	 */
	// useCallback avoids redefining function
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
