import { useState, useRef, useEffect } from 'react'

export function useHover() {
	const [hovered, setHovered] = useState(false)
	const ref = useRef(null)

	const handleMouseEnter = () => setHovered(true)
	const handleMouseLeave = () => setHovered(false)

	useEffect(() => {
		const el = ref.current
		if (el) {
			el.addEventListener('mouseenter', handleMouseEnter)
			el.addEventListener('mouseleave', handleMouseLeave)

			return () => {
				el.removeEventListener('mouseenter', handleMouseEnter)
				el.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}, [])
	return { hovered, ref }
}
