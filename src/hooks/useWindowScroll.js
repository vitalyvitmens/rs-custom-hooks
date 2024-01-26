import { useState, useCallback } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
	const [scroll, setScroll] = useState({
		x: typeof window !== 'undefined' ? window.scrollX : 0,
		y: typeof window !== 'undefined' ? window.scrollY : 0,
	})

	const scrollTo = useCallback(({ x, y }) => {
		window.scrollTo(x, y)
		setScroll({ x, y })
	}, [])

	useWindowEvent(
		'scroll',
		() => {
			const x = window.scrollX
			const y = window.scrollY
			setScroll({ x, y })
		},
		{ passive: true }
	)

	return [scroll, scrollTo]
}
