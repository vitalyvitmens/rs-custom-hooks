import { useState, useEffect } from 'react'

const isLocalStorageAvailable = () => {
	try {
		const testKey = '__test__'
		localStorage.setItem(testKey, testKey)
		localStorage.removeItem(testKey)
		return true
	} catch (error) {
		return false
	}
}

export function useLocalStorage(storageKey, initialState) {
	if (!isLocalStorageAvailable()) {
		throw new Error('localStorage is not available')
	}

	const [value, setValue] = useState(() => {
		const saveValue = JSON.parse(localStorage.getItem(storageKey))

		return saveValue || initialState
	})

	const methods = {
		setItem: (newValue) => {
			setValue(newValue)
			localStorage.setItem(storageKey, JSON.stringify(newValue))
		},
		removeItem: () => {
			setValue(null)
			localStorage.removeItem(storageKey)
		},
	}

	useEffect(() => {
		const handleStorageChange = (e) => {
			if (e.key === storageKey) {
				if (e.newValue) {
					setValue(JSON.parse(e.newValue))
				} else {
					setValue(null)
				}
			}
		}
		window.addEventListener('storage', handleStorageChange)

		return () => window.removeEventListener('storage', handleStorageChange)
	}, [storageKey])

	return [value, methods]
}
