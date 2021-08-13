import React, { useState } from 'react'
import HomeTemplate from '../../templates/HomeTemplate'
import uuid from 'uuid-random'

/** Repositories search screen */
export default function Home() {
	const [error, setError] = useState(true)

	return (
		<HomeTemplate error={error}
			setError={setError}
			errorTitle="User not found"
			errorMessage="Maybe you miswrite the username"

			inputPlaceholder="GitHub username"
			onInputSubmit={() => { }}

			title="GitHub Repositories"

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
