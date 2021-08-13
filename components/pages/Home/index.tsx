import React, { useState } from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import uuid from 'uuid-random'
import i18n from '../../../i18n'

const { t } = i18n

/** Repositories search screen */
export default function Home() {
	const [error, setError] = useState(false)

	return (
		<HomeTemplate error={error}
			setError={setError}
			errorTitle={t('errorTitle')}
			errorMessage={t('errorMessage')}

			inputPlaceholder={t('inputPlaceholder')}
			onInputSubmit={() => { }
			}

			title={i18n.t('appTitle')}

			data={
				[{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				},
				{
					title: 'Fathers Day',
					description: 'Repositório usado para tsc tsc tsc',
					key: uuid()
				}]
			} />
	)
}
