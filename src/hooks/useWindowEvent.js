import { useLayoutEffect } from 'react'

export function useWindowEvent(type, listener, { passive }) {
	useLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, { passive })
			return () => window.removeEventListener(type, listener, { passive })
		}
	}, [type, listener, passive])
}
