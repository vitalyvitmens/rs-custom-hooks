import { useCallback, useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useViewportSize() {
	const [height, setHeight] = useState(
		typeof window !== 'undefined' ? window.innerHeight : 0
	)
	const [width, setWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0
	)

	const resize = useCallback(() => {
		setHeight(typeof window !== 'undefined' ? window.innerHeight : 0)
		setWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
	}, [])

	useWindowEvent('resize', resize, { passive: true })

	return { height, width }
}
