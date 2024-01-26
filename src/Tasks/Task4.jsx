import { useViewportSize } from '../hooks/useViewportSize'
import styles from './tasks.module.css'
import { useMemo } from 'react'

export function Task4() {
	const { height, width } = useViewportSize()

	const view = useMemo(() => {
		return (
			<div className={styles.view}>
				<div className={styles.width}>↔ Width: {width} px</div>
				<div className={styles.height}>↕ Height: {height} px</div>
			</div>
		)
	}, [height, width])

	return (
		<div>
			<h4>Task4</h4>
			{view}
		</div>
	)
}
