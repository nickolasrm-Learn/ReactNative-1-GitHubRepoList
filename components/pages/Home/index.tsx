import React, { useState } from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import uuid from 'uuid-random'
import i18n from '../../../i18n'
import { getRepos } from '../../../adapters/github'
import { NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'
import { ListItemProps } from '../../molecules/ListItem'

const { t } = i18n

/** Repositories search screen */
export default function Home() {
	/** Controls modal */
	const [error, setError] = useState(false)
	/** Stores repositories */
	const [repos, setRepos] = useState<ListItemProps[]>([])

	/** If a user is found, it sets setRepos variable with the user repositories data.
	 * Otherwise, it shows the modal
	 */
	const handleInputSubmit = (ev: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
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
	}

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
