import React, { useEffect } from 'react'
import { registerAction, useAppDispatch, useAppSelector } from '@store'

const Test = () => {
	const dispatch = useAppDispatch()
	const state = useAppSelector((state) => state.auth)

	useEffect(() => {
		setTimeout(
			() =>
				dispatch(
					registerAction({
						email: 'email',
						firstName: 'test',
						lastName: 'test',
						password: 'test',
						username: 'test2s'
					})
				),
			2000
		)
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export default Test
