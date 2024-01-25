import { useHover } from '../hooks/useHover'
import styles from './tasks.module.css'

export function Task3() {
	const { hovered, ref } = useHover()

	return (
		<div>
			<h4>Task3</h4>
			<div ref={ref} className={styles.hoverable}>
				{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
			</div>
		</div>
	)
}
