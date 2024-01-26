import { useMemo } from 'react'
import { Button } from '../components/Button'
import { useWindowScroll } from '../hooks/useWindowScroll'
import styles from './tasks.module.css'

export function AdditionalTask1() {
	const [scroll, scrollTo] = useWindowScroll()

	const view = useMemo(() => {
		return (
			<div className={styles.view}>
				<div className={styles.position}>Scroll position:</div>
				<div className={styles.width}>↔ x: {scroll.x} px</div>
				<div className={styles.height}>↕ y: {scroll.y} px</div>
			</div>
		)
	}, [scroll.x, scroll.y])

	return (
		<div>
			<h4>Additional Task1</h4>
			{view}
			<Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
		</div>
	)
}
