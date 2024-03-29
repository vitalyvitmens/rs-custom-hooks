import { useState, useLayoutEffect, useRef } from 'react'

export function useFetch(url, options = {}) {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [newOptions, setNewOptions] = useState(null)
	const controller = useRef(null)

	useLayoutEffect(() => {
		setIsLoading((prev) => !prev)
		controller.current = new AbortController()
		fetch(url, { ...options, ...newOptions, signal: controller.current.signal })
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error(response.statusText)
				}
			})
			.then((result) => {
				setData(result)
				setIsLoading((prev) => !prev)
				setError(null)
			})
			.catch((error) => {
				if (error.name === 'AbortError') {
					console.log('Request aborted', error.message)
				} else {
					setIsLoading((prev) => !prev)
					setError(error)
				}
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, newOptions])

	function refetch(newOptions) {
		setNewOptions(newOptions)
	}

	return { data, isLoading, error, newOptions, refetch }
}
